export const hideEmail = (email: string | undefined | null) => {
  if (email) {
    const [username, domain] = email.split('@');
    const visibleUsername = username.substring(0, 3);
    const hiddenUsername = '*'.repeat(username.length - 3);
    return `${visibleUsername}${hiddenUsername}@${domain}`;
  }
};

export const hidePhoneNumber = (phoneNumber: string | undefined | null) => {
  if (phoneNumber) {
    const visiblePart = phoneNumber.substring(phoneNumber.length - 4);
    const hiddenPart = '*'.repeat(phoneNumber.length - 4);
    return `+7 ${hiddenPart}${visiblePart}`;
  }
};
