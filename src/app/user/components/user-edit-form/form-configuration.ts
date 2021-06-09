const defaultRules: any = {
  minLength: 3,
  maxLength: 255,
  required: true
};

const rules: any = {
  email: {
    ...defaultRules,
  },
  firstName: {
    ...defaultRules,
  },
  lastName: {
    ...defaultRules,
  },
  aboutMe: {
    ...defaultRules,
    maxLength: 1000,
  },
  maxDistance: {
    ...defaultRules,
  },
  ageRangeTop: {
    ...defaultRules,
    max: 100,
  },
  ageRangeBottom: {
    ...defaultRules,
    min: 18,
  },
  interest: {},
  dateOfBirth: {
    required: true,
  },
  password: {
    ...defaultRules,
    minLength: 8,
    required: false,
  },
};


export const formConfiguration: any = {
  forms: {
    validation: {
      ...rules
    }
  }
};
