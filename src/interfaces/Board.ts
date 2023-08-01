export interface BoardProps {
  turns: Record<number, string>;
  onTurn: (index: number) => void;
}
