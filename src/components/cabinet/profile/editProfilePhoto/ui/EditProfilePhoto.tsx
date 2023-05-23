// packages
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// components
import { Button, ThemeButton } from "@/UI/Button/ui/Button";

// assets
import { IconCabinetEditPhoto } from "@/assets/icons";
import cls from "./EditProfilePhoto.module.scss";
import ImageDefaultAvatar from "@/assets/images/ImageDefaultAvatar.png";
import { EditProfile } from "@/store/slices/ProfileSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

export const EditProfilePhoto = ({
  setFieldValue,
  avatar,
  immediately,
}: any) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [Temp, setTemp] = useState<any>(true);

  const { user: authUser } = useAppSelector((state) => state.AuthSlice);
  const { user: profileUser } = useAppSelector((state) => state.ProfileSlice);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : "";

    if (immediately) {
      dispatch<any>(EditProfile({ userId: authUser?.id, avatar: file }));
    }

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // @ts-ignore
        setPreviewUrl(reader.result);
        setFieldValue("avatar", file);
      };
    }
  };

  useEffect(() => {
    const isAvatarFile = avatar instanceof File || avatar instanceof Blob;
    if (isAvatarFile) {
      setPreviewUrl(URL.createObjectURL(avatar));
    } else {
      setPreviewUrl(avatar);
    }
  }, [avatar]);

  return (
    <div>
      {Temp && (
        <div className={cls.editProfile}>
          {/* @ts-ignore */}
          {previewUrl || profileUser?.avatar || authUser?.avatar ? (
            <Image
              width={167}
              height={167}
              className={cls.editProfile_avatar}
              // @ts-ignore
              src={previewUrl || profileUser?.avatar || authUser?.avatar}
              alt="User avatar"
            />
          ) : (
            <Image
              width={167}
              height={167}
              className={cls.editProfile_avatar}
              src={ImageDefaultAvatar}
              alt="Default user avatar"
            />
          )}
          <div className={cls.editProfile_btn}>
            <Button
              type="button"
              theme={ThemeButton.CLEAR}
              onClick={handleClick}
            >
              <IconCabinetEditPhoto />
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput}
              onChange={handleFileSelect}
              style={{ display: "none" }}
              name="img"
            />
          </div>
        </div>
      )}
    </div>
  );
};
