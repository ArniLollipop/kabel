/** @format */

// @ts-nocheck

// packages
import { useEffect, useState } from "react";

// assets
import cls from "./index.module.scss";
import {
	IconCabinetPassword,
	IconCabinetEdit,
	IconCabinetChangePhoneNumber,
} from "@/assets/icons";

// components
import {
	ActiveCabinetPageEnum,
	CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import {
	ProductCardItem,
	ThemeProductCard,
} from "@/components/ProductCardItem/ProductCardItem";
import { ShowEditProfile } from "@/components/cabinet/profile/showEditProfile";
import { EditProfilePhoto } from "@/components/cabinet/profile/editProfilePhoto";
import { Form, Formik } from "formik";
import { useAppSelector } from "@/hooks/store";
import { ShowChangePhoneNumber } from "@/components/cabinet/profile/showChangePhoneNumber";
import { Modal } from "@/shared/modal/Modal";
import { OkModal } from "@/components/cabinet/profile/okModal";
import { ShowChangePassword } from "@/components/cabinet/profile/showChangePassword";
import { ProfileService } from "@/services/Profile.service";

import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function profilePage() {
	const [showEditProfile, setShowEditProfile] = useState<boolean>(false);
	const [showChangePhoneNumber, setShowChangePhoneNumber] =
		useState<boolean>(false);
	const [showChangePassword, setShowChangePassword] = useState<boolean>(false);
	const [numberOrEmail, setNumberOrEmail] = useState<string>("");
	const [showModal, setShowModal] = useState(false);
	const [user, setUser] = useState<any>();
	const { user: authUser } = useAppSelector((state) => state.AuthSlice);

	const router = useRouter();

	const { t } = useTranslation();
	// DON'T FORGET TO USE GET USER ID IN ORDER TO SHOW EXACT USERS DATA INSTEAD OF USING PROFILE USER OR AUTH USER AND EVERYWHERE YOU HAVE THESE TWO IMPORTS

	const getUser = async () => {
		let temp = JSON.parse(localStorage.getItem("user"));
		if (temp) {
			const res = await ProfileService().getExactUser(temp.id);
			setUser(res);
		}
	};

	useEffect(() => {
		getUser();
	}, [authUser]);

	return (
		<CabinetLayout
			className={cls.content}
			activePage={ActiveCabinetPageEnum.PROFILE}>
			<Head>
				<title>{t("title_profile")}</title>
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />
				<meta name='description' content={t("description_profile") as string} />
				<meta name='og:title' content={t("title_profile") as string} />
				<meta
					name='og:description'
					content={t("description_profile") as string}
				/>
				<meta property='og:image' content={"https://cable.kz/Logo.svg"} />

				<meta itemProp='name' content={t("title_profile") as string} />
				<meta
					itemProp='description'
					content={t("description_profile") as string}
				/>
				<meta itemProp='image' content='https://cable.kz/Logo.svg' />
			</Head>

			{showModal && (
				<Modal isOpen={showModal}>
					<OkModal numberOrEmail={numberOrEmail} setShowModal={setShowModal} />
				</Modal>
			)}
			{showEditProfile ? (
				<ShowEditProfile setShowEditProfile={setShowEditProfile} />
			) : showChangePhoneNumber ? (
				<ShowChangePhoneNumber
					setNumberOrEmail={setNumberOrEmail}
					setShowChangePhoneNumber={setShowChangePhoneNumber}
					setShowModal={setShowModal}
				/>
			) : showChangePassword ? (
				<ShowChangePassword
					setNumberOrEmail={setNumberOrEmail}
					setShowModal={setShowModal}
					setShowChangePassword={setShowChangePassword}
				/>
			) : (
				<Formik
					initialValues={{
						// @ts-ignore
						avatar: user && user?.avatar,
					}}
					onSubmit={(values) => {
						console.log("values is: ", {
							...values,
						});
					}}>
					{({ values, setFieldValue }) => {
						return (
							<Form>
								<div className={cls.userCard}>
									<div className={cls.userCard_info}>
										<EditProfilePhoto
											immediately={true}
											setFieldValue={setFieldValue}
											avatar={values.avatar}
										/>
										<div className={cls.userCard_datas}>
											<p>
												<span>{t("name")}: </span>
												{(user && user?.first_name) || ""}{" "}
												{(user && user?.last_name) || ""}
												{!user && t("yourName")}
											</p>
											<p>
												<span>Email: </span>
												{user && user?.email} {!user && t("yourMail")}
											</p>
											<p>
												<span>{t("nomerTelephona")}: </span>
												{user && user?.phone_number} {!user && t("yourPhone")}
											</p>
										</div>
									</div>
									<div className={cls.userCard_btns}>
										<Button
											onClick={() => setShowChangePassword(true)}
											className={cls.userCard_btn}
											theme={ThemeButton.CLEAR}>
											<IconCabinetPassword />
											{t("changePass")}
										</Button>
										<Button
											onClick={() => setShowEditProfile(true)}
											className={cls.userCard_btn}
											theme={ThemeButton.CLEAR}>
											<IconCabinetEdit /> {t("changeProfile")}
										</Button>
										<Button
											onClick={() => setShowChangePhoneNumber(true)}
											className={cls.userCard_btn}
											theme={ThemeButton.CLEAR}>
											<IconCabinetChangePhoneNumber /> {t("changePhone")}
										</Button>
									</div>
								</div>
							</Form>
						);
					}}
				</Formik>
			)}

			{/* <div className={cls.recommended}>
        <h2 className={cls.recommended_title}>{t("recom")}</h2>
        <ul>
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
        </ul>
      </div> */}
		</CabinetLayout>
	);
}
