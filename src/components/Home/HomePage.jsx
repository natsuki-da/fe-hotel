import { getImageUrl } from "../../utils/imageHelper";
import * as S from "./HomePage.styles"

const HomePage = () => {
  return (
    <S.Container>
      <S.CoverPhoto>
        <S.Image src={getImageUrl('restaurang.JPG')} alt="Restaurang photo" />
      </S.CoverPhoto>
      <S.Footer>
        © 2026 kyoto hideaway. All rights reserved.
      </S.Footer>
    </S.Container>
  )
}

export default HomePage;