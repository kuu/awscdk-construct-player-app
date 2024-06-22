import styles from "../../page.module.css";
import HLSPlayer from "./hls";
import {getEndpoint, getPlaybackUrl} from "../../data";

export default function Player({params}: { params: { endpoint: string }}) {
  const endpoint = getEndpoint(params.endpoint);
  const url = getPlaybackUrl(endpoint?.id as string, endpoint?.type as string);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>{endpoint?.name}</div>
        <p>
            HLS.js&nbsp;
        </p>
      </div>
      <div className={styles.center}>
        <HLSPlayer
          src={url}
          width={640}
          height={360}
          priority
        />
      </div>
    </main>
  );
}
