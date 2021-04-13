import React from "react"
import { RawAvatar } from "./RawAvatar"

export interface AvatarProps {
  name: string
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const splitted = name.split(" ")

  if (splitted.length === 1) {
    const firstLetter = splitted[0][0]
    return <RawAvatar letters={firstLetter} />
  }

  const firstLetter = splitted[0][0]
  const lastLetter = splitted[splitted.length - 1][0]
  const word = `${firstLetter}${lastLetter}`
  return <RawAvatar letters={word} />
}
