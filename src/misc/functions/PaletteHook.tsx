import { useState, useEffect} from "react"

import Palette from '../color-palette.json';

const usePaletteColor = () => {
  const [indexPalette, setIndexPalette] = useState('light'),
        [colorPalette, setColorPalette] = useState(Palette[indexPalette as keyof typeof Palette]);

    useEffect(() => {
        setColorPalette(Palette[indexPalette as keyof typeof Palette]);
    }, [indexPalette])

    return {
        colorPalette,
        setIndexPalette
    }
}

export default usePaletteColor
