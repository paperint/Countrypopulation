import Region from "../(HOME)/component/Region.json";

export default function useCustomHook() {
  const bgColor = (region) => {
    switch (region) {
      case "Asia":
        return "hsla(263, 100%, 47%, 0.2)";
      case "Europe":
        return "hsla(319, 78%, 47%, 0.2)";
      case "Africa":
        return "hsla(25, 100%, 47%, 0.2)";
      case "Oceania":
        return "hsla(87, 100%, 47%, 0.2)";
      case "Americas":
        return "hsla(61, 100%, 47%, 0.2)";
      default:
        return;
    }
  };

  const borderColor = (region) => {
    switch (region) {
      case "Asia":
        return "hsla(263, 100%, 47%, 1)";
      case "Europe":
        return "hsla(319, 78%, 47%, 1)";
      case "Africa":
        return "hsla(25, 100%, 47%, 1)";
      case "Oceania":
        return "hsla(87, 100%, 47%, 1)";
      case "Americas":
        return "hsla(61, 100%, 47%, 1)";
      default:
        return;
    }
  };

  const arrayMark = (start, end) => {
    const mark = [];
    for (let i = start; i <= end; i += 4) {
      mark.push({ value: i, label: `${i}` });
    }
    return mark;
  };

  const convertToNumberFormat = (input) => {
    return new Intl.NumberFormat("en-US").format(input);
  };

  const findRegion = (countryName) => {
    const { region, image } = Region.countryToRegion[countryName];
    return { region, image };
  };

  const addRegion = (data) => {
    const updateRegion = data.map((item) => {
      const { region, image } = findRegion(item.countryname);
      return { ...item, region, image };
    });
    return updateRegion;
  };
  return {
    bgColor,
    borderColor,
    arrayMark,
    convertToNumberFormat,
    findRegion,
    addRegion,
  };
}
