export interface spell {
  higher_level?: string[];
  index?: string;
  name?: string;
  desc?: string[];
  range?: string;
  components?: string[];
  ritual?: boolean;
  duration?: string;
  concentration?: boolean;
  casting_time?: string;
  level?: number;
  attack_type?: string;
  damage?: {
    damage_type?: {
      index?: string;
      name?: string;
      url?: string;
    };
    damage_at_character_level?: {
      [level: string]: string;
    };
  };
  school?: {
    index?: string;
    name?: string;
    url?: string;
  };
  classes?: {
    index?: string;
    name?: string;
    url?: string;
  }[];
  subclasses?: {
    index?: string;
    name?: string;
    url?: string;
  }[];
  url?: string;
  updated_at?: string;
}