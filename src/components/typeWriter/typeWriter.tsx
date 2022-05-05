import { memo } from 'react';
import TypewriterComponent from 'typewriter-effect';

interface TypeWriterProps {
  delay: number;
  pause?: number;
  label: string;
  cursor?: string;
}

const TypeWriter = ({ delay, label, cursor, pause }: TypeWriterProps) => {
  return (
    <TypewriterComponent
      options={{
        cursor: cursor ?? '',
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(pause ?? 0)
          .changeDelay(delay)
          .typeString(label)
          .stop()
          .start();
      }}
    />
  );
};

export default memo(TypeWriter);
