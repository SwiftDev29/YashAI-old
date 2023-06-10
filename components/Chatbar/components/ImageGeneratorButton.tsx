import { FC } from 'react';
import SidebarActionButton from './SidebarActionButton';

interface Props {
  imageGeneratorURL: string;
}

export const ImageGeneratorButton: FC<Props> = ({ imageGeneratorURL }) => {
  const handleImageGeneratorClick = () => {
    window.open(imageGeneratorURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <SidebarActionButton handleClick={handleImageGeneratorClick}>
      Image Generation
    </SidebarActionButton>
  );
};
