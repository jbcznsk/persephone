import axios from 'axios';
import './App.css';
import { Plant } from './components/Plant/Plant';
import { PlantLine } from './components/PlantLine/PlantLine';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div>
        <PlantLine
          p1name="Aeonium Arboreum f. Variegata"
          p1src="aeonium/aeonium_arboreum_f_variegata"
          p2name="Aeonium Arboreum Zwartkop"
          p2src="aeonium/aeonium_arboreum_zwartkop"
          p3name="Agave Victoriae Reginae"
          p3src="agave/agave_victoriae_reginae"
          p4name="Aloe Aristata"
          p4src="aloe/aloe_aristata"
        />
        <PlantLine
          p1name="Ceropegia Sordida"
          p1src="ceropegia/ceropegia_sordida"
          p2name="eropegia Woodii"
          p2src="ceropegia/ceropegia_woodii"
          p3name="Codiaeum Variegatum"
          p3src="codiaeum/codiaeum_variegatum"
          p4name="Coleus Scutellarioides"
          p4src="coleus/coleus_scutellarioides"
        />
        <PlantLine
          p1name="corpuscularia_lehmanni"
          p1src="corpuscularia/corpuscularia_lehmanni"
          p2name="cotyledon_tomentosa"
          p2src="cotyledon/cotyledon_tomentosa"
          p3name="crassula_ovata"
          p3src="crassula/crassula_ovata"
          p4name="crassula_ovata_gollum"
          p4src="crassula/crassula_ovata_gollum"
        />
        
        <PlantLine
          p1name="crassula_perfoliata_var_falcata"
          p1src="crassula/crassula_perfoliata_var_falcata"
          p2name="crassula_sarmentosa_comet"
          p2src="crassula/crassula_sarmentosa_comet"
          p3name="crassula_thyrsiflora"
          p3src="crassula/crassula_thyrsiflora"
          p4name="delosperma_echinatum"
          p4src="delosperma/delosperma_echinatum"
        />
        
        <PlantLine
          p1name="echeveria_derenbergii"
          p1src="echeveria/echeveria_derenbergii"
          p2name="echeveria_lilacina"
          p2src="echeveria/echeveria_lilacina"
          p3name="echeveria_mebina"
          p3src="echeveria/echeveria_mebina"
          p4name="echeveria_olivia"
          p4src="echeveria/echeveria_olivia"
        />
        
        <PlantLine
          p1name="echeveria_perle_von_nurnberg"
          p1src="echeveria/echeveria_perle_von_nurnberg"
          p2name="echeveria_prolifica"
          p2src="echeveria/echeveria_prolifica"
          p3name="echeveria_purpusorum"
          p3src="echeveria/echeveria_purpusorum"
          p4name="echeveria_nodulosa"
          p4src="echeveria/echeveria_nodulosa"
        />
        
        <PlantLine
          p1name="echinocactus_grusonii"
          p1src="echinocactus/echinocactus_grusonii"
          p2name="echinopsis_chamaecereus"
          p2src="echinopsis/echinopsis_chamaecereus"
          p3name="epipremnm_aureum_njoy"
          p3src="epipremnm/epipremnm_aureum_njoy"
          p4name="gasteria_obliqua"
          p4src="gasteria/gasteria_obliqua"
        />
        
        <PlantLine
          p1name="gymnocalucium_mihanocihii_var_friedrichii"
          p1src="gymnocalucium/gymnocalucium_mihanocihii_var_friedrichii"
          p2name="hatiora_salicornioides"
          p2src="hatiora/hatiora_salicornioides"
          p3name="haworthia_cymbiformis"
          p3src="haworthia/haworthia_cymbiformis"
          p4name="haworthiopsis_fasciata"
          p4src="haworthiopsis/haworthiopsis_fasciata"
        />
                
        <PlantLine
          p1name="kalanchoe_daifremontiana"
          p1src="kalanchoe/kalanchoe_daifremontiana"
          p2name="kalanchoe_marmorata"
          p2src="kalanchoe/kalanchoe_marmorata"
          p3name="kalanchoe_millotii"
          p3src="kalanchoe/kalanchoe_millotii"
          p4name="kalanchoe_tomenosa"
          p4src="kalanchoe/kalanchoe_tomenosa"
        />
        
                
        <PlantLine
          p1name="ledebouria_socialis"
          p1src="ledebouria/ledebouria_socialis"
          p2name="mammillaria_elongata"
          p2src="mammillaria/mammillaria_elongata"
          p3name="opuntia_microsadys"
          p3src="opuntia/opuntia_microsadys"
          p4name="orostachys_boehmeri"
          p4src="orostachys/orostachys_boehmeri"
        />
        
                
        <PlantLine
          p1name="othonna_capensis"
          p1src="othonna/othonna_capensis"
          p2name="pachyphytum_overifum"
          p2src="pachyphytum/pachyphytum_overifum"
          p3name="peperomia_ferreyre"
          p3src="peperomia/peperomia_ferreyre"
          p4name="phediumus_spurius_dragons_blood"
          p4src="phediumus/phediumus_spurius_dragons_blood"
        />
        
                
        <PlantLine
          p1name="phediumus_spurius_tricolor"
          p1src="phediumus/phediumus_spurius_tricolor"
          p2name="philodendron_birkin"
          p2src="philodendron/philodendron_birkin"
          p3name="portulacaria_afra_variegata"
          p3src="portulacaria/portulacaria_afra_variegata"
          p4name="sedum_dasyphyllum_major"
          p4src="sedum/sedum_dasyphyllum_major"
        />
        
                
        <PlantLine
          p1name="sedum_stahlii"
          p1src="sedum/sedum_stahlii"
          p2name="senecio_articulatus"
          p2src="senecio/senecio_articulatus"
          p3name="senecio_macroglossus"
          p3src="senecio/senecio_macroglossus"
          p4name="xpachyveria_glauca"
          p4src="xpachyveria/xpachyveria_glauca"
        />
        
                
        <PlantLine
          p1name="xsedeveria_harry_butterfield"
          p1src="xsedeveria/xsedeveria_harry_butterfield"
          p2name=""
          p2src="/"
          p3name=""
          p3src="/"
          p4name=""
          p4src="/"
        />
        
                
        <PlantLine
          p1name=""
          p1src="/"
          p2name=""
          p2src="/"
          p3name=""
          p3src="/"
          p4name=""
          p4src="/"
        />
        
                
        <PlantLine
          p1name=""
          p1src="/"
          p2name=""
          p2src="/"
          p3name=""
          p3src="/"
          p4name=""
          p4src="/"
        />
        
                
        <PlantLine
          p1name=""
          p1src="/"
          p2name=""
          p2src="/"
          p3name=""
          p3src="/"
          p4name=""
          p4src="/"
        />
        
                
        <PlantLine
          p1name=""
          p1src="/"
          p2name=""
          p2src="/"
          p3name=""
          p3src="/"
          p4name=""
          p4src="/"
        />
      </div>

    </div>
  );
}

export default App;
