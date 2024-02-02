export interface card {
  title: string;
  image: string;
  color: string;
}

export interface searchProps {
  value: string;
  ontype: (value: string) => void;
}
