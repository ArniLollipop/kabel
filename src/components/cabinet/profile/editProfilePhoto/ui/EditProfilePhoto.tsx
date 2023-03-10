// packages
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// components
import { Button, ThemeButton } from '@/UI/Button/ui/Button';

// assets
import { IconCabinetEditPhoto } from '@/assets/icons';
import cls from './EditProfilePhoto.module.scss';
import ImageDefaultAvatar from '@/assets/images/ImageDefaultAvatar.png';

export const EditProfilePhoto = ({ setFieldValue, userEditProfilePhoto }: any) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
        setFieldValue('userEditProfilePhoto', file);
      };
    }
  };

  useEffect(() => {
    if (userEditProfilePhoto) {
      setPreviewUrl(URL.createObjectURL(userEditProfilePhoto));
    }
  }, [userEditProfilePhoto]);

  return (
    <div className={cls.editProfile}>
      {previewUrl ? (
        <Image
          width={167}
          height={167}
          className={cls.editProfile_avatar}
          src={previewUrl}
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
        <Button type="button" theme={ThemeButton.CLEAR} onClick={handleClick}>
          <IconCabinetEditPhoto />
        </Button>
        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          name="img"
        />
      </div>
    </div>
  );
};
