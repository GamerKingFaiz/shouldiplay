import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const GameBox = ({ data }) => {
  const [openCriticGameData, setOpenCriticGameData] = useState();

  useEffect(() => {
    fetch(`https://api.opencritic.com/api/game/search?criteria=${data.name}`)
      .then((openCriticSearchResponse) => openCriticSearchResponse.json())
      .then((openCriticSearchData) => {
        console.log(1, openCriticSearchData[0].id);
        const openCriticId = openCriticSearchData[0].id;
        fetch(`https://api.opencritic.com/api/game/${openCriticId}`)
          .then((openCriticGame) => openCriticGame.json())
          .then((openCriticGameJson) =>
            setOpenCriticGameData(openCriticGameJson)
          );
      });
  }, [data.name]);

  console.log(2, openCriticGameData);
  return (
    <Box display={"flex"} alignItems={"center"} padding={2}>
      <img src={`https://howlongtobeat.com${data.imageUrl}`} height={"150px"} />
      <Box padding={1}>
        <strong>
          <a href={`https://howlongtobeat.com/game?id=${data.id}`}>
            {data.name}
          </a>
        </strong>
        <p>Main Story: {data.gameplayMain}</p>
        <p>Main + Extra: {data.gameplayMainExtra}</p>
        <p>Completionist: {data.gameplayCompletionist}</p>
      </Box>
      {openCriticGameData?.topCriticScore > -1 && (
        <a
          href={`https://opencritic.com/game/${openCriticGameData.id}/${openCriticGameData.name}`}
        >
          Top Critic Average: {Math.round(openCriticGameData.topCriticScore)}
        </a>
      )}
    </Box>
  );
};

export default GameBox;
