import React, { useEffect, useState } from 'react';
import { BtnOpacity, Txt } from "./styles";

interface Props {
  children: React.ReactNode;
  onPress: () => void
}

export function Button({ onPress, children }: Props) {
  return (
      <BtnOpacity
        onPress={onPress}
        activeOpacity={0.6}>
        <Txt>{children}</Txt>
      </BtnOpacity>
  )
}