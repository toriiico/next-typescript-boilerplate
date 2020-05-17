import React, { FC, Props } from "react"
import { parseISO, format } from "date-fns"

type MainProps = Props<{}> & {
  dateString: string
}

export const Date: FC<MainProps> = (props) => {
  const { dateString } = props
  const date = parseISO(dateString)

  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
}
