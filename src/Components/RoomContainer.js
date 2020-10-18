import React, { Fragment } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loadihg from './Loading'

function RoomContainer({ context }) {
  const { loadihg, sortRooms, rooms } = context
  if (loadihg) 
    return <Loadihg />
  return (
    <Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortRooms} />
    </Fragment>
    )
}

export default withRoomConsumer(RoomContainer)

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const { loadihg, sortRooms, rooms } = value
//           if (loadihg) 
//             return <Loadihg />
//           return (
//             <Fragment>
//               <RoomFilter rooms={rooms} />
//               <RoomList rooms={sortRooms} />
//             </Fragment>
//             )
//           }
//       }
//     </RoomConsumer>
//   )
// }
