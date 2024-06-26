export interface ViewersContentDataProps {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface ViewersContentProps {
  data: ViewersContentDataProps;
}

export interface GPTSearchBarProps {
  onError: () => void;
}
