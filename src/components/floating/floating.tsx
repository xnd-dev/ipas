import { FloatingContainer } from './floating.styles';

type FloatingProps = {
  image: string;
  top: { default: number | string; sm?: number | string };
  left?: { default?: number | string; sm?: number | string };
  right?: { default?: number | string; sm?: number | string };
  width: { default?: string; sm?: 'auto' | number };
  display?: { default?: string; sm?: string };
};

export function Floating({ image, top, left, right, width, display }: FloatingProps) {
  return (
    <FloatingContainer
      css={{
          top: typeof top.default === 'number' ? `${top.default}rem` : 'auto',
          left: left?.default !== undefined ? `${left.default}rem` : 'auto',
          right: right?.default !== undefined ? `${right.default}rem` : 'auto',
          width: width?.default !== undefined ? (typeof width.default === 'number' ? `${width.default}rem` : width.default) : 'auto',
        '@sm': {
          top: `${top.sm}rem`,
          left: left?.sm !== undefined ? `${left.sm}rem` : 'auto',
          right: right?.sm !== undefined ? `${right.sm}rem` : 'auto',
          width: width?.sm !== undefined ? (typeof width.sm === 'number' ? `${width.sm}rem` : width.sm) : 'auto',
          display: display?.sm !== undefined ? display.sm : 'block',
        },
      }}
    >
      <img src={image} alt="Elemento gráfico" />
    </FloatingContainer>
  );
}
