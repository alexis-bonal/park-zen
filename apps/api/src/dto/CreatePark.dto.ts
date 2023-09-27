type CreateParkDTO = {
  address: {
    street: string;
    city: string;
    ZipCode: string;
  };
  priceForOneHour: number;
  renter: {
    id: string;
    firstName: string;
    lastName: string;
  };
  spaceType: 'moto' | 'car' | 'camion';
  caracteristics: {
    isPrivate: boolean;
    isIndoor: boolean;
  };
};

export default CreateParkDTO;
