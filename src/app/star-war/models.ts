
export type SearchData = {
  search?: string,
  page?: string,
};

export type List<X> = {
  count: number;
  previous: string | null ;
  next: string | null ;
  results: X[];
};

export type  person = {
  name: string // The name of this person.
  birth_year: string // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
  eye_color: string // The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
  gender: string // The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
  hair_color: string // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height: number // The height of the person in centimeters.
  mass: number // The mass of the person in kilograms.
  skin_color: string // The skin color of this person.
  homeworld: string // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: string[] // An array of film resource URLs that this person has been in.
  species: string[] // An array of species resource URLs that this person belongs to.
  starships: string[] // An array of starship resource URLs that this person has piloted.
  vehicles: string[] // An array of vehicle resource URLs that this person has piloted.
  url: string // the hypermedia URL of this resource.
  created: string // the ISO 8601 date format of the time that this resource was created.
  edited: string // the ISO 8601 date format of the time that this resource was edited.
}

export type species = {
  name: string // The name of this species.
  classification: string // The classification of this species, such as "mammal" or "reptile".
  designation: string // The designation of this species, such as "sentient".
  average_height: string // The average height of this species in centimeters.
  average_lifespan: string // The average lifespan of this species in years.
  eye_colors: string // A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
  hair_colors: string // A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
  skin_colors: string // A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
  language: string // The language commonly spoken by this species.
  homeworld: string // The URL of a planet resource, a planet that this species originates from.
  people: string[] // An array of People URL Resources that are a part of this species.
  films: string[] // An array of Film URL Resources that this species has appeared in.
  url: string // the hypermedia URL of this resource.
  created: string // the ISO 8601 date format of the time that this resource was created.
  edited: string // the ISO 8601 date format of the time that this resource was edited.
}


// parser Function
export function parseList(data : any) : List<unknown> {
  return{
    ...data,
    count: parseInt(data.count),
  }
}

export function parseResult(data : any) : any & {
  created: Date,
  edited: Date } {
  return {
    ...data,
    created: new Date(data.created),
    edited: new Date(data.edited),
  };
}

//Person
export function parsePerson(data : any) : person {
  return{
    ...parseResult(data),
    height: parseFloat(data.height),
    mass: parseFloat(data.mass),
  };
}

export function parsePeopleList(data : any) : List<person>{
  return{
    ...parseList(data),
    results: (data.results || []).map((data : any) => parsePerson(data)), // [] for protect err when data is null ,it will return emtry array []
  };
}

//Specie
export function parseSpecies(data : any) : species {
  return{
    ...parseResult(data),
    average_height: parseFloat(data.average_height),
    average_lifespan: parseFloat(data.average_lifespan),
  };
}

export function parseSpeciesList(data : any) : List<species>{
  return{
    ...parseList(data),
    results: (data.results || []).map((data : any) => parseSpecies(data)),
  }
}
