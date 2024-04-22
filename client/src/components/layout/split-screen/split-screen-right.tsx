interface Props {
  children: string | React.ReactElement | React.ReactElement[];
}

function SplitScreenRight({ children }: Props) {
  return <>{children}</>;
}

export default SplitScreenRight;
