/** @format */

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./AboutSection.module.scss";
import { Title } from "@/UI/Title/Title";
import ImageHomepageAbout from "@/assets/images/ImageHomepageAbout.png";
import Image from "next/image";
import { AboutI } from "@/types/AboutTypes";

const cn = classNames.bind(cls);

interface AboutSectionProps {
	className?: string;
	aboutInfo: AboutI;
}

export const AboutSection: FC<AboutSectionProps> = (props) => {
	const { className, aboutInfo } = props;

	return (
		<section
			itemScope
			itemType='https://schema.org/AboutPage'
			className={cls.AboutSection}>
			<Title itemProp='name' className={cls.AboutSection_title}>
				{aboutInfo?.title}
			</Title>
			<div className={cls.AboutSection_descrWrapper}>
				<Image
					itemProp='image'
					src={aboutInfo?.image}
					className={cls.AboutSection_descrImage}
					alt={aboutInfo?.title + "| Almaty Kazkabel"}
					width={470}
					height={450}
				/>
				<div itemType='description' className={cls.AboutSection_descrText}>
					<div
						dangerouslySetInnerHTML={{ __html: aboutInfo?.text }}
						className={cls.AboutSection_text}
					/>

					<div
						className={cls.AboutSection_descrAccent}
						dangerouslySetInnerHTML={{ __html: aboutInfo?.our_goal }}
					/>
				</div>
			</div>
		</section>
	);
};
