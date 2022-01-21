
import { useRef, useState } from 'react'

import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/88ea6dda71b72bfc554967591ebd2b2d/61eaff35/video/tos/useast2a/tos-useast2a-ve-0068c002/2445355a7f544cd78d26f76160001466/?a=1988&br=1922&bt=961&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThKiXAlXq&l=202201211244370101890730771E168305&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzo7Ojg6Zjs8OjMzNzgzM0ApPDo0aTY1NmVoNzhnO2Y1NWcubS5jcjRnYGZgLS1kLzZzczIxYzUwYWI2MC5eY2I0MmI6Yw%3D%3D&vl=&vr='
export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
