import { Dispatch, FC, SetStateAction, useState } from "react";
import classNames from "classnames/bind";
import cls from "./FilterSection.module.scss";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { Field, Form, Formik } from "formik";
import { CheckBoxInstance } from "@/shared/formElements/checkboxInstance/CheckBoxInstance";
import { RadioInstance } from "@/shared/formElements/radioInstance/RadioInstance";
import { ProductService } from "@/services/Product.servise";
import { setProducts } from "@/store/slices/ProductSlice";
import { queriesGenerator } from "@/helpers/queriesGenerator";
import { SortByWidget } from "@/layouts/CatalogPage/widgets/SortByWidget/SortByWidget";

const cn = classNames.bind(cls);

interface FilterSectionProps {
  className?: string;
  isOpened?: boolean;
  closeFilters?: Dispatch<SetStateAction<boolean>>;
}

export const FilterSection: FC<FilterSectionProps> = (props) => {
  const { isOpened, closeFilters } = props;
  const { categories, cores, products } = useAppSelector(
    (state) => state.ProductSlice
  );
  const dispatch = useAppDispatch();

  interface sortI {
    availability: "Все" | "в наличии" | "под заказ";
    checkedCors: string[];
    categories: string[];
    sortWidget: "-cost" | "cost";
  }

  const submitHandler = async (value: sortI) => {
    const { availability, categories, checkedCors, sortWidget } = value;

    const core_number = [
      ...new Set(checkedCors.map((el) => el.slice(0, el.indexOf("x")))),
    ];
    const section = [
      ...new Set(
        checkedCors.map((el) => el.slice(el.indexOf("x") + 1, el.length))
      ),
    ];

    const coresQuery = queriesGenerator(core_number, "core_number");
    const sectionsQuery = queriesGenerator(section, "section");
    const categoriesQuery = queriesGenerator(categories, "subcategory");
    const availabilityQuery =
      availability === "Все" ? "" : `availability=${availability}`;
    const sortQuery = `&ordering=${sortWidget}`;

    const queries = `?${coresQuery}${sectionsQuery}${categoriesQuery}${availabilityQuery}${sortQuery}`;
    console.log("result", queries);
    const res = await ProductService().getProducts(queries);
    dispatch(setProducts(res));
  };

  return (
    <div className={cn(cls.FilterSection, { visible: isOpened })}>
      <Formik
        initialValues={{
          availability: "Все",
          checkedCors: [],
          categories: [],
          sortWidget: "cost",
        }}
        onSubmit={(values: sortI) => submitHandler(values)}
      >
        {({ isSubmitting, values }) => (
          <Form>
            {/* Header of Filters */}
            <div className={cls.header} id="top">
              <span>{products?.count || "Нет"} товаров</span>

              <div className={cls.mainBtns}>
                <Button
                  theme={ThemeButton.YELLOW}
                  className={cls.resetBtn}
                  type="button"
                  onClick={async () => {
                    values.availability = "Все";
                    values.categories = [];
                    values.checkedCors = [];
                    values.sortWidget = "cost";
                    const res = await ProductService().getProducts();
                    dispatch(setProducts(res));
                  }}
                >
                  сбросить
                </Button>
              </div>
            </div>

            {/* Sort by */}
            <SortByWidget />

            {/* Availability filters */}
            <div className={cls.availability}>
              <h3 className={cn(cls.availability_title, cls.filterTitle)}>
                Наличие
              </h3>

              <RadioInstance
                name="availability"
                value="Все"
                id="all"
                text="Все"
                className={cls.FilterSection_radio}
              />
              <RadioInstance
                name="availability"
                value="в наличии"
                id="inStock"
                text="В наличии"
                className={cls.FilterSection_radio}
              />
              <RadioInstance
                name="availability"
                value="под заказ"
                id="underOrder"
                text="Под заказ"
                className={cls.FilterSection_radio}
              />
            </div>

            {/* Categories filters */}
            <div className={cls.product}>
              <h3 className={cn(cls.product_title, cls.filterTitle)}>
                Продукция
              </h3>

              <Accordion className={cls.filtersAcc} alwaysOpen={true}>
                {/* Categories */}
                <>
                  {categories ? (
                    categories.results.map((cat, i) => (
                      <AccordionItem
                        isActive={i === 0 ? true : false}
                        key={cat.name}
                      >
                        {({ open }: { open: boolean }) => (
                          <>
                            <AccordionHeader
                              as="div"
                              className={cn(cls.filtersAcc_title, {
                                filtersAcc_titleActive: open,
                              })}
                            >
                              <h3 className={cls.accTitle}>{cat.name}</h3>
                              <svg
                                className={cn(cls.filtersAcc_arrow, {
                                  filtersAcc_arrowActive: open,
                                })}
                                width="15"
                                height="9"
                                viewBox="0 0 15 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </AccordionHeader>

                            <AccordionBody
                              className={cn(cls.filtersAcc_body, {
                                filtersAcc_bodyActive: open,
                              })}
                              as="ul"
                            >
                              {cat.subcategory_set.map((subcat) => (
                                <li
                                  className={cls.filtersAcc_item}
                                  key={subcat.name}
                                >
                                  <CheckBoxInstance
                                    value={subcat.name}
                                    name="categories"
                                    id={subcat.name}
                                    text={subcat.name}
                                    className={cls.filtersAcc_itemInput}
                                  />
                                </li>
                              ))}
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>
                    ))
                  ) : (
                    <></>
                  )}

                  {/* Сечение */}
                  <AccordionItem isActive={true}>
                    {({ open }: { open: boolean }) => (
                      <>
                        <AccordionHeader
                          className={cn(
                            cls.filtersAcc_title,
                            cls.filtersAcc_titleCross
                          )}
                          as="div"
                        >
                          <h3 className={cls.accTitle}>Сечение </h3>
                          <svg
                            className={cn(cls.filtersAcc_arrow, {
                              filtersAcc_arrowActive: open,
                            })}
                            width="15"
                            height="9"
                            viewBox="0 0 15 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562"
                              stroke="#39424b"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </AccordionHeader>

                        <AccordionBody className={cls.filtersAcc_body} as="ul">
                          {cores ? (
                            Object.keys(cores).map((core) => (
                              <ul
                                className={cls.filtersAcc_coreSect}
                                key={core}
                              >
                                {cores[core].map((coreSect) => (
                                  <li
                                    className={cls.filtersAcc_coreSectItem}
                                    key={`${core}x${coreSect}`}
                                    data-sub={`${core}x${coreSect}`}
                                  >
                                    <CheckBoxInstance
                                      text={`${core}x${coreSect}`}
                                      name="checkedCors"
                                      value={`${core}x${coreSect}`}
                                      id="coreItem"
                                    />
                                  </li>
                                ))}
                              </ul>
                            ))
                          ) : (
                            <></>
                          )}
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                </>
              </Accordion>
            </div>

            {/* Submit Btns */}
            <div className={cls.submitBtns}>
              <Button
                className={cls.submitBtn}
                theme={ThemeButton.BLUE}
                type="submit"
                disabled={isSubmitting}
                onClick={() => closeFilters && closeFilters(false)}
              >
                Применить
              </Button>
              <a href="#top" className={cls.anchorUp}>
                Наверх
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
