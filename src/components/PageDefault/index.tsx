import React from 'react';

import { PageContainer } from './styles'

interface Props {
  children: React.ReactNode
}

const PageDefault: React.FC<Props> = ({ children }) => {
  return (
    <PageContainer>
      { children }
    </PageContainer>
  )
}

export default PageDefault