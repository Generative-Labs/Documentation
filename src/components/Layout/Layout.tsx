import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import cx from 'classnames';
import ss from './index.module.css';

interface LayoutProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  code: React.ReactNode;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { title, description, code, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={ss['code-lineout']}>
      <div className={ss['code-box-demo']}>{children}</div>
      <div className={ss['code-box-meta']}>
        <div className={ss['code-box-title']}>{title}</div>
        <div className={ss['code-box-description']}>{description}</div>
        <div className={ss['code-box-actions']}>
          <span className={ss['code-box-show-code']}>
            <img
              className={cx(ss['code-icon'], {
                [ss['code-icon-hide']]: open,
              })}
              onClick={() => setOpen(!open)}
              src='https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg'
              alt=''
            />
            <img
              className={cx(ss['code-icon'], {
                [ss['code-icon-hide']]: !open,
              })}
              onClick={() => setOpen(!open)}
              src='https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg'
              alt=''
            />
          </span>
        </div>
      </div>
      <div
        className={cx(ss['highlight-wrapper'], {
          [ss['highlight-wrapper-hide']]: !open,
        })}>
        {code}
      </div>
    </div>
  );
};
