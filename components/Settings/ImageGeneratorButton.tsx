import { IconImages } from '@tabler/icons-react';
import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import { SidebarButton } from '../Sidebar/SidebarButton';

interface Props {
  imageGeneratorURL: string;
}

export const ImageGeneratorButton: FC<Props> = ({ imageGeneratorURL }) => {
  const { t } = useTranslation('sidebar');

  const handleClick = () => {
    window.open(imageGeneratorURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <SidebarButton
      text="Image Generation"
      icon={<IconImages size={18} />}
      onClick={handleClick}
    />
  );
};
