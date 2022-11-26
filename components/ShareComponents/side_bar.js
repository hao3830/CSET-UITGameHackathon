import Pages from '../../components/Constant/index'
import { useRouter } from 'next/router'
import Link from 'next/link'

const items = [
  {
    label: 'SCOREBOARD',
    href: Pages.scoreboard,
  },
  {
    label: 'TASKBOARD',
    href: Pages.taskboard,
  },
  {
    label: 'PENDING',
    href: Pages.pending,
  },
  {
    label: 'DONE',
    href: Pages.done,
  },
  {
    label: 'GIFT',
    href: Pages.done,
  },
]

const Sidebar = ({setCurrPage, currPage}) => {

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-base-300 p-2 text-base font-semibold text-white shadow-md">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="w-full">
              <span
                className={`inline-block w-full cursor-pointer rounded-full p-4 text-center duration-300
                  ${currPage == item.label ? ' bg-green-500' : ''}`}
                  onClick={()=> {
                    setCurrPage(item.label)
                  }}
              >
                {item.label}
              </span>
          </li>
        ))}
      </ul>
      <p className="absolute bottom-2 w-full text-center text-sm">
        Copyright © 2022 CSET - UITGameHackathon
      </p>
    </div>
  )
}

export default Sidebar
