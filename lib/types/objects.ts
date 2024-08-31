type DataObject<T> = {
  id: string;
  ref: string;
} & T;

type Ids = "id" | "worldId" | "operatorId" | "roomId";
type DataKeys =
  | "machines"
  | "letters"
  | "resources"
  | "rooms"
  | "words"
  | "x"
  | "y";
type WorldObject<T extends DataObject<Y>, Y = {}> = Omit<T, Ids | DataKeys>;
