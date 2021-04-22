import * as Enum from "./enum";

export interface ICoordinate {}

export interface IDataItem {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  room_number: string;
  program_type: string;
  boundary: {
    type: string;
    coordinates: number[][][];
  };
  note: string | null;
  deskcount: number;
  physical_deskcount: number;
  area: number;
  has_window: boolean;
  internal_room_count: number;
}
