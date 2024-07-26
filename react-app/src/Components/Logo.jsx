export default function Logo({ link, srcName, classes, altName }) {
  return (<><div>
    <a href={link} target="_blank">
      <img src={srcName} className={classes + " logo"} alt={altName + " logo"} />
    </a>
  </div>
  </>);
}