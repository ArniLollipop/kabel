// packages
import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Form, Formik } from "formik";

// assets
import cls from "./AddOrEditDelivery.module.scss";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";

// mask
import { maskForPhone } from "@/helpers/masks";

// validation
import { deliveryAddressSchema } from "@/helpers/validation";

import { useHttp } from "@/hooks/useHttp";
import { useAppSelector } from "@/hooks/store";
import { useTranslation } from "react-i18next";
import Script from "next/script";
import { YMaps, Map, SearchControl } from "@pbe/react-yandex-maps";

let cn = classNames.bind(cls);

interface AddOrEditDeliveryProps {
	className: string;
	setIsOpen: any;
	address: string;
	floor: Number;
	apart_ment: Number;
	home_phone: Number;
	id: Number;
}

export const AddOrEditDelivery: FC<AddOrEditDeliveryProps> = (props) => {
	const { t } = useTranslation();

	const { user: authUser } = useAppSelector((state) => state.AuthSlice);
	const { className, setIsOpen, address, apart_ment, id, floor, home_phone } =
		props;

	const searchRef = useRef<any>();

	const [searchState, setSearchState] = useState<any>(address);

	useEffect(() => {
		if (searchState) {
			if (searchRef.current) {
				searchRef.current?.search(searchState).then((result: any) => {
					const resultsArray = result.geoObjects.toArray();

					let temp: any = [];

					resultsArray.map((geoObject: any) => {
						const name = geoObject.properties.get("text");
						const coordinates = geoObject.geometry.getCoordinates();

						temp.push({ name: name, coordinates: coordinates });
					});

					setAddresses(temp);
				});
			}
		} else {
			setAddresses([]);
		}
	}, [searchState]);

	useEffect(() => {
		const temp = document.querySelector(
			"#setAddress"
		) as HTMLInputElement | null;
		if (temp) {
			temp.scrollIntoView({ block: "center", behavior: "smooth" });
		}
	}, []);

	const [addresses, setAddresses] = useState<any>();
	const [choiceAddress, setChoiceAddress] = useState<any>();
	const [floorState, setFloor] = useState<any>(floor);
	const [apart_mentState, setApart_ment] = useState<any>(apart_ment);
	const [home_phoneState, setHome_phone] = useState<any>(home_phone);

	return (
		<div id='setAddress' className={cn(cls.AddOrEditDelivery, className)}>
			<Formik
				initialValues={{
					address: address ? address : "",
					floor: floor ? floor : "",
					apart_ment: apart_ment ? apart_ment : "",
					home_phone: home_phone ? home_phone : "",
					lat: "",
					lon: "",
				}}
				onSubmit={(values: any) => {
					console.log(values);
				}}
				validationSchema={deliveryAddressSchema}>
				{({ values, touched, errors, handleChange, handleBlur }: any) => {
					const handleSaveAddOrDelivery = async () => {
						if (address) {
							await useHttp()
								.put("users/user_addresses/" + id + "/", {
									address: choiceAddress ? choiceAddress.name : "",
									longitude: choiceAddress ? choiceAddress.coordinates[0] : "",
									latitude: choiceAddress ? choiceAddress.coordinates[1] : "",
									floor: floorState,
									apart_ment: apart_mentState,
									home_phone: home_phoneState,
									phone_number: "",
									user: authUser?.id,
								})
								.then(() => {
									setIsOpen(false);
								});
						} else {
							await useHttp()
								.post(
									"users/user_addresses/",
									{
										address: choiceAddress ? choiceAddress.name : "",
										longitude: choiceAddress
											? choiceAddress.coordinates[0]
											: "",
										latitude: choiceAddress ? choiceAddress.coordinates[1] : "",
										floor: floorState,
										apart_ment: apart_mentState,
										home_phone: home_phoneState,
										phone_number: "",
										user: authUser?.id,
									},
									{
										headers: {
											Authorization:
												"Bearer " + localStorage.getItem("access_token"),
										},
									}
								)
								.then(() => {
									setIsOpen(false);
								});
						}
					};

					return (
						<div className={cls.container}>
							<p>{address ? t("changeAddress") : t("newAddress")}</p>

							<Form>
								<div className='relative'>
									<input
										className='w-full border border-solid border-[#D2D8DE] rounded-[30px] px-[18px] py-[14px] text-base placeholder:text-[#AAB5C0] font-medium'
										id='search'
										name='search'
										type='text'
										placeholder='Поиск'
										value={searchState}
										onChange={(e: any) => setSearchState(e.target.value)}
									/>
									{addresses && (
										<div className='absolute top-full left-0 w-full z-[5] max-h-64 overflow-y-scroll select'>
											{addresses?.map((el: any) => {
												return (
													<button
														onClick={() => {
															setChoiceAddress(el);
															setAddresses([]);
															setSearchState(el.name);
														}}
														className='w-full hover:bg-[#f3f3f3] bg-transparent border border-solid bg-white border-[#D2D8DE] p-4 text-start rounded-[30px] cursor-pointer font-medium text-base'>
														{el.name}
													</button>
												);
											})}
										</div>
									)}
								</div>
								<input
									className='w-full border border-solid border-[#D2D8DE] rounded-[30px] px-[18px] py-[14px] text-base placeholder:text-[#AAB5C0] font-medium'
									id='floor'
									name='floor'
									type='text'
									placeholder='Этаж'
									value={floorState}
									onChange={(e: any) => setFloor(e.target.value)}
								/>
								<input
									className='w-full border border-solid border-[#D2D8DE] rounded-[30px] px-[18px] py-[14px] text-base placeholder:text-[#AAB5C0] font-medium'
									id='apart_ment'
									name='apart_ment'
									type='text'
									placeholder='Номер квартиры/офис'
									value={apart_mentState}
									onChange={(e: any) => setApart_ment(e.target.value)}
								/>
								<input
									className='w-full border border-solid border-[#D2D8DE] rounded-[30px] px-[18px] py-[14px] text-base placeholder:text-[#AAB5C0] font-medium'
									id='home_phone'
									name='home_phone'
									type='text'
									placeholder='Домофон'
									value={home_phoneState}
									onChange={(e: any) => setHome_phone(e.target.value)}
								/>

								<p className={cls.warning}>{t("findAddress")}</p>

								{/* <div id="map1" className="h-[300px] w-full mt-6"></div> */}
								{/* написано на нативном жс так как, некст не поддерживал яндекс мапы. Нативка написана в _document.tsx */}
								{/* <Script
                  dangerouslySetInnerHTML={{
                    __html: `
                    getMap2(43.2446, 76.9114);
              `,
                  }}
                ></Script> */}
								<div className='hidden'>
									<YMaps
										enterprise
										query={{ apikey: "18378de5-507b-4d2a-a7c7-ca2fb2be7f0b" }}>
										<Map
											className='map-small'
											defaultState={{
												center: [43.2446, 76.9114],
												zoom: 13,
												controls: [],
											}}>
											<SearchControl
												options={{ float: "left" }}
												instanceRef={(ref: any) => {
													searchRef.current = ref;
												}}
											/>
										</Map>
									</YMaps>
								</div>
								<div className={cls.container_BtnContainer}>
									<Button
										theme={ThemeButton.CANCEL}
										onClick={() => setIsOpen!(false)}
										type='button'>
										{t("otmena")}
									</Button>

									<Button
										onClick={handleSaveAddOrDelivery}
										type='submit'
										theme={ThemeButton.YELLOW}>
										{t("saveMent")}
									</Button>
								</div>
							</Form>
						</div>
					);
				}}
			</Formik>
		</div>
	);
};
