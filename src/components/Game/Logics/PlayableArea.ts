/** @format */

export default function PlayableArea(config: any) {
  const boundaries = config.boundaries;
  const warp_coords = Object.keys(config.related_map);
  const walls = config.walls;
  let playable = [...warp_coords];

  for (let i = boundaries.min[0]; i <= boundaries.max[0]; i++) {
    for (let j = boundaries.min[1]; j <= boundaries.max[1]; j++) {
      playable.push(`[${i},${j}]`);
    }
  }

  const fix_playable = playable.filter((coord) => !walls.includes(coord));

  return fix_playable;
}
