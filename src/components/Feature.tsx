interface FeatureProps {
  text: string;
}

export const initialProps: FeatureProps = {
  text: 'Feature Text',
};

export default function Feature({ text }: FeatureProps) {
  return <li key={text}>{text}</li>;
}
