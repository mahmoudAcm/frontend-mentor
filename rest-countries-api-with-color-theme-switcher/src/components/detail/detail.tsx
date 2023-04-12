import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import {
  Section,
  BackButton,
  Details,
  Flag,
  LeftSide,
  RightSide,
  InfosContainer,
  Infos,
  Info,
  Borders,
  FlagContainer,
  FlagSkeleton,
  RightSideLoadingScreen,
} from "./styles";
import { Container, Typography, CircularProgress, Button } from "@mui/material";
import { ErrorWrapper } from "styles";

//icons
import ArrowLeftIcon from "../../icons/ArrowLeft";

//hooks
import useCountry from "./useCountry";
import usePreventScrolling from "@common/hooks/usePreventScrolling";

const isDev = import.meta.env.DEV;

export default function Detail() {
  const [tryAgain, setTryAgain] = useState(false);
  const navigate = useNavigate();
  const { data, isFetching, error } = useCountry(tryAgain);
  const [isImgageLoading, setImageLoading] = useState(true);

  const isFlagLoading = isFetching || isImgageLoading;

  useEffect(() => {
    document.documentElement.style.setProperty("--font-size", "16px");
  }, []);

  const onImageLoaded = () => {
    setImageLoading(false);
  };

  const goBack = () => {
    navigate("/countries");
  };

  usePreventScrolling(() => Boolean(error));

  if (error) {
    return (
      <ErrorWrapper>
        <Typography variant="h5" fontWeight={600}>
          A communication error has occurred with the API
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setTryAgain((prev) => !prev);
          }}
        >
          Retry
        </Button>
      </ErrorWrapper>
    );
  }

  return (
    <Section>
      <Container>
        <BackButton
          variant="contained"
          startIcon={<ArrowLeftIcon />}
          onClick={goBack}
        >
          Back
        </BackButton>
        <Details>
          <LeftSide>
            <FlagContainer>
              <FlagSkeleton
                variant="rectangular"
                className={isFlagLoading ? undefined : "fade"}
              />
              {isDev ? (
                <Flag
                  src="us.svg"
                  sx={{ opacity: isFlagLoading ? 0 : 1 }}
                  alt={data?.name + " Flag"}
                  onLoad={onImageLoaded}
                />
              ) : (
                <Flag
                  src={data?.flags.svg}
                  sx={{ opacity: isFlagLoading ? 0 : 1 }}
                  alt={data?.name + " Flag"}
                  onLoad={onImageLoaded}
                />
              )}
            </FlagContainer>
          </LeftSide>
          {isFetching ? (
            <RightSideLoadingScreen>
              <CircularProgress disableShrink />
            </RightSideLoadingScreen>
          ) : (
            <RightSide>
              <>
                <Typography
                  variant="h4"
                  fontSize="1.9rem"
                  fontWeight={800}
                  className="country--name"
                >
                  {data?.name}
                </Typography>
                <InfosContainer>
                  <Infos>
                    <div className="row">
                      {data?.nativeName ? (
                        <Info>
                          Native Name: <span>{data?.nativeName}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.population ? (
                        <Info>
                          Population: <span>{data?.population}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.region ? (
                        <Info>
                          Region: <span>{data?.region}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.subregion ? (
                        <Info>
                          Sub Region: <span>{data?.subregion}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.capital ? (
                        <Info>
                          Capital: <span>{data?.capital}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Infos>
                  <Infos>
                    <div className="row">
                      {data?.tld ? (
                        <Info>
                          Top Level Domain: <span>{data?.tld}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.currencies ? (
                        <Info>
                          Currencies: <span>{data?.currencies}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.languages ? (
                        <Info>
                          Languages: <span>{data?.languages}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Infos>
                </InfosContainer>
                {data?.borders?.length ? (
                  <Borders>
                    Border Countries:
                    <span className="borders">
                      {(data?.borders ?? []).map((border, idx) => (
                        <span className="badge" key={idx}>
                          {border}
                        </span>
                      ))}
                    </span>
                  </Borders>
                ) : (
                  <></>
                )}
              </>
            </RightSide>
          )}
        </Details>
      </Container>
    </Section>
  );
}
