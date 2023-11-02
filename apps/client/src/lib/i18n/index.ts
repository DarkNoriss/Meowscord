const translation = {
  user: {
    status: {
      online: 'Online',
      idle: 'Idle',
      dnd: "Don't Disturb",
      offline: 'Offline',
      mobile: 'Mobile',
      pending: 'Pending',
      blocked: 'Blocked',
    },
  },
};

type TranslationKeys = keyof typeof translation;

export const t = (key: string) => {
  try {
    const keys = key.toLowerCase().split('.') as TranslationKeys[];
    let result: any = translation;
    for (const k of keys) {
      result = result[k];
    }
    return result;
  } catch (error) {
    return key;
  }
};
