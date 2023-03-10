import { Dispatch, FC, SetStateAction, useState } from 'react';
import classNames from 'classnames/bind';
import cls from './FilterSection.module.scss';
import { Button, ThemeButton } from '@/UI/Button/ui/Button';
import { IconRefreshFilters } from '@/assets/icons/IconRefreshFilters';
import { SearchInput } from '@/shared/formElements/SearchInput/SearchInput';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion';

const cn = classNames.bind(cls);

interface FilterSectionProps {
  className?: string;
  isOpened?: boolean;
  closeFilters?: Dispatch<SetStateAction<boolean>>;
}

export const FilterSection: FC<FilterSectionProps> = (props) => {
  const { className, isOpened, closeFilters } = props;

  return (
    <div className={cn(cls.FilterSection, { visible: isOpened })}>
      <div className={cls.header} id="top">
        <span>5500 товаров</span>

        <button className={cls.mockBtn} onClick={() => closeFilters && closeFilters(false)}>
          Close
        </button>

        <div className={cls.mainBtns}>
          <Button theme={ThemeButton.YELLOW} className={cls.resetBtn}>
            сбросить
          </Button>
          <Button theme={ThemeButton.CLEAR}>
            <IconRefreshFilters />
          </Button>
        </div>
      </div>

      <SearchInput placeholder="Название" className={cls.searchInput} />

      <div className={cls.availability}>
        <h3 className={cn(cls.availability_title, cls.filterTitle)}>Наличие</h3>
        <label htmlFor="all" className={cls.availability_inputGroup}>
          <input type="radio" name="availability" value="all" id="all" checked />
          Все
        </label>

        <label htmlFor="inStock" className={cls.availability_inputGroup}>
          <input type="radio" name="availability" value="inStock" id="inStock" />В наличии
        </label>

        <label htmlFor="underOrder" className={cls.availability_inputGroup}>
          <input type="radio" name="availability" value="underOrder" id="underOrder" />
          Под заказ
        </label>
      </div>

      <div className={cls.product}>
        <h3 className={cn(cls.product_title, cls.filterTitle)}>Продукция</h3>

        <Accordion className={cls.filtersAcc} alwaysOpen={true}>
          {/* Медные кабеля и провода */}

          <AccordionItem isActive={true}>
            {({ open }: { open: boolean }) => (
              <>
                <AccordionHeader
                  className={cn(cls.filtersAcc_title, { filtersAcc_titleActive: open })}
                >
                  <h3 className={cls.accTitle}>Медные кабеля и провода</h3>
                  <svg
                    className={cn(cls.filtersAcc_arrow, { filtersAcc_arrowActive: open })}
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562"
                      //   stroke="#00ABC2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody
                  className={cn(cls.filtersAcc_body, { filtersAcc_bodyActive: open })}
                  as="ul"
                >
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                  <li className={cls.filtersAcc_item}>ШВВП</li>
                  <li className={cls.filtersAcc_item}>ПУГНП</li>
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                  <li className={cls.filtersAcc_item}>ШВВП</li>
                  <li className={cls.filtersAcc_item}>ПУГНП</li>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          {/* Алюминиевые кабеля и провода */}
          <AccordionItem>
            {({ open }: { open: boolean }) => (
              <>
                <AccordionHeader
                  className={cn(cls.filtersAcc_title, { filtersAcc_titleActive: open })}
                >
                  <h3 className={cls.accTitle}>Алюминиевые кабеля и провода</h3>
                  <svg
                    className={cn(cls.filtersAcc_arrow, { filtersAcc_arrowActive: open })}
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562"
                      //   stroke="#00ABC2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody
                  className={cn(cls.filtersAcc_body, { filtersAcc_bodyActive: open })}
                  as="ul"
                >
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          {/* Комплектующие для кабелей и проводов  */}
          <AccordionItem>
            {({ open }: { open: boolean }) => (
              <>
                <AccordionHeader
                  className={cn(cls.filtersAcc_title, { filtersAcc_titleActive: open })}
                >
                  <h3 className={cls.accTitle}>Комплектующие для кабелей и проводов </h3>
                  <svg
                    className={cn(cls.filtersAcc_arrow, { filtersAcc_arrowActive: open })}
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562"
                      //   stroke="#00ABC2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody
                  className={cn(cls.filtersAcc_body, { filtersAcc_bodyActive: open })}
                  as="ul"
                >
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                  <li className={cls.filtersAcc_item}>ШВВП</li>
                  <li className={cls.filtersAcc_item}>ПУГНП</li>
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                  <li className={cls.filtersAcc_item}>ШВВП</li>
                  <li className={cls.filtersAcc_item}>ПУГНП</li>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          {/* Сечение */}
          <AccordionItem isActive={true}>
            {({ open }: { open: boolean }) => (
              <>
                <AccordionHeader className={cn(cls.filtersAcc_title, cls.filtersAcc_titleCross)}>
                  <h3 className={cls.accTitle}>Сечение </h3>
                  <svg
                    className={cn(cls.filtersAcc_arrow, { filtersAcc_arrowActive: open })}
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
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                  <li className={cls.filtersAcc_item}>ШВВП</li>
                  <li className={cls.filtersAcc_item}>ПУГНП</li>
                  <li className={cls.filtersAcc_item}>ПВ-1</li>
                  <li className={cls.filtersAcc_item}>ПВ-2</li>
                  <li className={cls.filtersAcc_item}>ППВ</li>
                  <li className={cls.filtersAcc_item}>ШВВП</li>
                  <li className={cls.filtersAcc_item}>ПУГНП</li>
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      <Button className={cls.submitBtn} theme={ThemeButton.BLUE}>
        Применить
      </Button>

      <a href="#top" className={cls.anchorUp}>
        Наверх
      </a>
    </div>
  );
};
