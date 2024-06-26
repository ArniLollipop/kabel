import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./ProductCardItem.module.scss";
import Link from "next/link";
import {
	IconCardItemDelivery,
	IconCardItemInStock,
	IconCardItemOutOfStock,
} from "@/assets/icons";
import mockImage from "@/assets/images/ImageMockProduct2.png";
import nullImg from "@/assets/images/nullImg.png";

import Image from "next/image";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { productI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { setAmount, setItems } from "@/store/slices/CartSlice";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

export const enum ThemeProductCard {
	CATALOG = "catalog",
	MINI = "mini",
}

interface ProductCardItemProps extends productI {
	className?: string;
	theme?: ThemeProductCard;
	promo_cost?: number;
	remains: number;
}

export const ProductCardItem: FC<ProductCardItemProps> = (props) => {
	const { t } = useTranslation();
	const { className, theme = ThemeProductCard.CATALOG } = props;
	const dispatch = useAppDispatch();
	const [cart, setCart] = useState<number>(0);
	const [cartChange, setCartChange] = useState<number>(0);
	const { items } = useAppSelector((state) => state.CartSlice);
	const router = useRouter();
	const [disabled, setDisabled] = useState<boolean>(false);

	const plus = () => setCart((prev) => prev + 1);
	const minus = () => cart > 1 && setCart((prev) => prev - 1);

	async function handleAddCart(e: any) {
		if (props.availability === "в наличии") {
			e.stopPropagation();
			try {
				const res = await useHttp().post(
					"orders/carts/add_to_cart/",
					{
						product: props.code,
					},
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("access_token"),
						},
					}
				);
				dispatch(setAmount(res.data.result.total_amount));
				dispatch(setItems(res.data.result.items));
			} catch (err) {
				window.location.replace("/auth");
			}
		}
	}

	async function handleMinus(e: any) {
		e.stopPropagation();
		setDisabled(true);

		try {
			const res = await useHttp().post(
				"orders/carts/reduce_from_cart/",
				{
					product: props.code,
				},
				{
					headers: {
						Authorization: "Bearer " + localStorage.getItem("access_token"),
					},
				}
			);
			dispatch(setAmount(res.data.result.total_amount));
			minus();
			setDisabled(false);
		} catch (err) {
			setDisabled(false);
		}
	}

	async function handleChangeCount(count: any) {
		setDisabled(true);
		try {
			if (
				parseInt(count) > 1 &&
				parseInt(count) <= props.remains &&
				parseInt(count) <= 99999
			) {
				const res = await useHttp().post(
					"orders/carts/add_to_cart/",
					{
						product: props.code,
						length: parseInt(count),
					},
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("access_token"),
						},
					}
				);
				setCart(parseInt(count));
				dispatch(setAmount(res.data.result.total_amount));
				setCartChange(parseInt(count));
			}
			setDisabled(false);
		} catch {
			setDisabled(false);
		}
	}

	async function handlePlus(e: any) {
		e.stopPropagation();
		setDisabled(true);
		if (cartChange < props.remains) {
			try {
				const res = await useHttp().post(
					"orders/carts/add_to_cart/",
					{
						product: props.code,
					},
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("access_token"),
						},
					}
				);
				dispatch(setAmount(res.data.result.total_amount));
				if (cartChange <= props.remains) plus();
				setDisabled(false);
			} catch (err) {
				setDisabled(false);
			}
		}
	}

	function handleStop(e: any) {
		e.stopPropagation();
	}

	useEffect(() => {
		setCart(0);
		if (items) {
			items.map((el: any) => {
				if (el.product_info.code === props.code) {
					setCart(el.length);
				}
			});
		}
	}, [items]);

	useEffect(() => {
		setCartChange(cart);
	}, [cart]);

	function handleClick() {
		router.push("/catalog/" + props.subcategory_slug + "/" + props.code);
	}

	return (
		<Link
			href={"/catalog/" + props.subcategory_slug + "/" + props.code}
			itemScope
			itemType='https://schema.org/Product'
			itemProp='url'
			// onClick={handleClick}
			className={
				cn(cls.ProductCardItem, cls[theme], className) + " itemShadow"
			}>
			<div className={cls.cardInfoIcons}>
				<IconCardItemDelivery />
				{props.availability === "в наличии" ? (
					<IconCardItemInStock />
				) : (
					<IconCardItemOutOfStock />
				)}
			</div>

			<Image
				itemProp='image'
				src={props.image || nullImg}
				alt={props.name + "| Almaty Kazkabel"}
				className={cls.cardImg}
				width={137}
				height={137}
			/>

			<div className={cls.cardInfo}>
				<Link
					href={`/catalog/${props.subcategory_slug}/${props.code}`}
					className={cls.link}>
					<h3 itemProp='name' className={cls.cardTitle}>
						{/* {props.name.length > 20
              ? `${props.name.slice(0, 17)}...`
              : props.name} */}
						{props.name}
					</h3>
				</Link>
				<p itemProp='description' className={cls.cardDescr}>
					{props.description
						? props.description.length < 20
							? props.description
							: `${props.description?.slice(0, 20)}...`
						: ""}
					{/* {props.description} */}
				</p>
				{props.promo_cost ? (
					<div itemProp='offers' itemScope itemType='https://schema.org/Offer'>
						<span itemProp='price' className={cls.cardPrice__old}>
							{props.cost} ₸
						</span>
						<span itemProp='priceCurrency' className={cls.cardPrice}>
							{props.promo_cost}
						</span>
					</div>
				) : (
					<p
						itemProp='offers'
						itemScope
						itemType='https://schema.org/Offer'
						className={cls.cardPrice}>
						<span itemProp='price'>{props.cost}</span>{" "}
						<span itemProp='priceCurrency'>₸</span>
					</p>
				)}
				{/* <span className={cls.newPrice}>{props.promo_cost} ₸</span> */}
			</div>
			<div className={cls.cardBtns}>
				{cart === 0 ? (
					<Button
						onClick={handleAddCart}
						theme={ThemeButton.CARD}
						className={cls.cardAddBtn}>
						{t("toCart")}
					</Button>
				) : (
					<div onClick={handleStop} className={cls.cartBtn}>
						<button
							disabled={disabled}
							onClick={(e: any) => {
								cart > 1 && handleMinus(e);
							}}
							className={cls.cartMinus}>
							<svg
								width='20'
								height='2'
								viewBox='0 0 20 2'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1 1H19'
									stroke='#00ABC2'
									strokeWidth='1.5'
									strokeLinecap='round'
								/>
							</svg>
						</button>
						<div className='flex items-center justify-between'>
							<input
								className={
									cls.cartCounter + " w-[50px] outline-none border-none"
								}
								min={1}
								max={1000}
								type='number'
								value={cartChange}
								onChange={(e: any) => {
									handleChangeCount(e.target.value);
								}}
							/>
							<p className={cls.cartCounter}>м</p>
						</div>
						<button
							disabled={disabled}
							onClick={(e: any) => {
								cart < 1000 && handlePlus(e);
							}}
							className={cls.cartPlus}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M12 5V19'
									stroke='#00ABC2'
									strokeWidth='1.5'
									strokeLinecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M5 12H19'
									stroke='#00ABC2'
									strokeWidth='1.5'
									strokeLinecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</div>
				)}
				{cart > 0 && (
					<Link href={`/card`} className={cls.cardMoreBtn}>
						{t("toCart")}
					</Link>
				)}
			</div>
		</Link>
	);
};
