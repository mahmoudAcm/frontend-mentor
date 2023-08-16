import { ReactNode } from 'react';
import { createSvgIcon, SvgIconProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export function createCustomSvgIcon(path: ReactNode, displayName: string, svgProps?: SvgIconProps) {
  const Icon = createSvgIcon(path, displayName);

  return function IconComponent(props: SvgIconProps) {
    const mergedProps = { ...svgProps, ...props };
    return <Icon {...mergedProps} />;
  } as OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
