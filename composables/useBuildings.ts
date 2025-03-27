import {buildings} from "~/data/buildingsData";
import {faculties} from "~/data/facultiesData";
import type {Building, BuildingInfo} from "~/types/building";

export function getBuildingById(id: number): BuildingInfo | undefined {
	return buildings.find(b => b.id === id);
}

export function getFacultyById(id: number): Building | undefined {
	return faculties.find(b => b.id === id);
}

