import { IEetMenuBuilder } from './i-eet-menu-builder';
import { EetMenu } from './eet-menu';

export class EetMenuBuilder implements IEetMenuBuilder {

    private eetMenu: EetMenu;

    constructor() {
        this.eetMenu = new EetMenu();
    }

    public setCadocsButtonOn( cadocsButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.cadocsButtonOn = cadocsButtonOn;
        return this;
    }

    setEeterrorsButtonOn( eeterrorsButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.eeterrorsButtonOn = eeterrorsButtonOn;
        return this;
    }

    setMainButtonOn( mainButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.mainButtonOn = mainButtonOn;
        return this;
    }

    setMainManuFlag( mainManuFlag: boolean ): EetMenuBuilder {
        this.eetMenu.mainManuFlag = mainManuFlag;
        return this;
    }

    setMaintenanceButtonOn( maintenanceButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.maintenanceButtonOn = maintenanceButtonOn;
        return this;
    }

    setMappingButtonOn( mappingButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.mappingButtonOn = mappingButtonOn;
        return this;
    }

    setScheduleButtonOn( scheduleButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.scheduleButtonOn = scheduleButtonOn;
        return this;
    }

    setSearchButtonOn( searchButtonOn: boolean ): EetMenuBuilder {
        this.eetMenu.searchButtonOn = searchButtonOn;
        return this;
    }

    build(): EetMenu {
        return this.eetMenu;
    }
}
