import ParkData from 'src/dto/CreatePark.dto';
import { v4 as uuidv4 } from 'uuid';

class CreateParkSlot {
  constructor() {}
  public handle(payload: ParkData) {
    console.log(payload);
    const data = {
      ...payload,
      uuid: uuidv4(),
      createdAt: new Date(),
    };
    console.log(data);
  }
}
export default CreateParkSlot;
