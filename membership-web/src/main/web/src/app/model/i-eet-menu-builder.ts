import { EetMenu } from './eet-menu';

export interface IEetMenuBuilder {
    setMainManuFlag(mainManuFlag: boolean): void;
    setMainButtonOn(mainButtonOn: boolean): void;
    setMaintenanceButtonOn(maintenanceButtonOn: boolean): void;
    setCadocsButtonOn(cadocsButtonOn: boolean): void;
    setSearchButtonOn(searchButtonOn: boolean): void;
    setEeterrorsButtonOn(eeterrorsButtonOn: boolean): void;
    setScheduleButtonOn(scheduleButtonOn: boolean): void;
    setMappingButtonOn(mappingButtonOn: boolean): void;
    build(): EetMenu;
}
