// / <reference types="@types/google.maps" />

import { CustomMap } from "./src/CustomMap"
import { User } from "./src/User"
import { Company } from "./src/Company"

const map = new CustomMap('map')

const user = new User()
const company = new Company()

map.addMarker(user)
map.addMarker(company)
