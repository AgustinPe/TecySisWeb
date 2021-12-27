define({"oj-message":{fatal:"Fatale",error:"Erreur",warning:"Avertissement",info:"Infos",confirmation:"Confirmation","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"La valeur n'est pas au format attendu.",detail:"Entrez une valeur dans le format attendu.","plural-separator":", ",hint:{summary:"Exemple : {exampleValue}",detail:"Entrez une valeur dans ce format : '{exampleValue}'.","detail-plural":"Entrez une valeur dans ces formats : '{exampleValue}'."},optionHint:{detail:"'{propertyValueValid}' est une valeur acceptée pour l'option '{propertyName}'.","detail-plural":"'{propertyValueValid}' sont des valeurs acceptées pour l'option '{propertyName}'."},optionTypesMismatch:{summary:"Une valeur doit être indiquée pour '{requiredPropertyName}' si l'option '{propertyName}' est réglée à '{propertyValue}'."},optionTypeInvalid:{summary:"La valeur indiquée pour l'option '{propertyName}' n'est pas du type attendu."},optionOutOfRange:{summary:"La valeur {propertyValue} est hors limites pour l'option '{propertyName}'."},optionValueInvalid:{summary:"Une valeur non valide '{propertyValue}' a été précisée pour l'option '{propertyName}'."},number:{decimalFormatMismatch:{summary:"La valeur fournie n'a pas le format numérique attendu."},shortLongUnsupportedParse:{summary:"Les valeurs 'short' et 'long' ne sont pas prises en charge par la fonction d'analyse du convertisseur.",detail:"Affectez l'attribut 'readonly' au composant. Les champs en lecture seule n'appellent pas la fonction d'analyse du convertisseur."},currencyFormatMismatch:{summary:"La valeur fournie n'a pas le format de devise attendu."},percentFormatMismatch:{summary:"La valeur fournie n'a pas le format de pourcentage attendu."},invalidNumberFormat:{summary:"La valeur fournie  n'est pas un nombre valide.",detail:"Indiquez un nombre valide."}},color:{invalidFormat:{summary:"Format de couleur non valide.",detail:"Spécification d'une option de format de couleur non valide."},invalidSyntax:{summary:"Spécification de couleur non valide.",detail:"Entrez une valeur de couleur conforme à la norme CSS3."}},datetime:{datetimeOutOfRange:{summary:"La valeur '{value}' est hors limites pour '{propertyName}'.",detail:"Entrez une valeur comprise entre '{minValue}' et '{maxValue}'.",hour:"heure",minute:"minute",second:"seconde",millisec:"milliseconde",month:"mois",day:"jour",year:"année","month name":"nom du mois",weekday:"jour de la semaine"},dateFormatMismatch:{summary:"La valeur fournie n'a pas le format de date attendu."},invalidTimeZoneID:{summary:"L'ID fuseau horaire fourni {timeZoneID} n'est pas valide."},nonExistingTime:{summary:"L'heure entrée n'existe pas, car elle tombe dans la période de transition vers l'heure avancée."},missingTimeZoneData:{summary:"Les données de fuseau horaire sont manquantes. Appelez la fonction require 'ojs/ojtimezonedata' pour charger les données de fuseau horaire."},timeFormatMismatch:{summary:"La valeur fournie n'a pas le format d'heure attendu."},datetimeFormatMismatch:{summary:"La valeur fournie n'a pas le format de date/heure attendu."},dateToWeekdayMismatch:{summary:"Le '{date}' ne tombe pas un '{weekday}'.",detail:"Entrez un jour de la semaine correspondant à la date."},invalidISOString:{invalidRangeSummary:"La valeur '{value}' est hors limites pour le champ '{propertyName}' de la chaîne ISO 8601 '{isoStr}'.",summary:"La chaîne '{isoStr}' fournie n'est pas une chaîne ISO 8601 valide.",detail:"Indiquez une chaîne ISO 8601 valide."}}},"oj-validator":{length:{hint:{min:"Entrez {min} caractères ou plus.",max:"Entrez {max} caractères ou moins.",inRange:"Entrez {min} à {max} caractères.",exact:"Entrez {length} caractères."},messageDetail:{tooShort:"Entrez {min} caractères ou plus.",tooLong:"N'entrez pas plus de {max} caractères."},messageSummary:{tooShort:"Il y a trop peu de caractères.",tooLong:"Il y a trop de caractères."}},range:{number:{hint:{min:"Entrez un nombre supérieur ou égal à {min}.",max:"Entrez un nombre inférieur ou égal à {max}.",inRange:"Entrez un nombre compris entre {min} et {max}.",exact:"Entrez le nombre {num}."},messageDetail:{rangeUnderflow:"Entrez {min} ou une valeur supérieure.",rangeOverflow:"Entrez {max} ou une valeur inférieure.",exact:"Entrez le nombre {num}."},messageSummary:{rangeUnderflow:"Le nombre est trop bas.",rangeOverflow:"Le nombre est trop élevé."}},datetime:{hint:{min:"Entrez une date et une heure identiques ou postérieures à {min}.",max:"Entrez une date et une heure identiques ou antérieures à {max}.",inRange:"Entrez une date et une heure comprises entre {min} et {max}."},messageDetail:{rangeUnderflow:"Entrez une date identique ou postérieure au {min}.",rangeOverflow:"Entrez une date identique ou antérieure au {max}."},messageSummary:{rangeUnderflow:"La date et l'heure correspondent à un instant antérieur à l'instant minimum.",rangeOverflow:"La date et l'heure correspondent à un instant postérieur à l'instant maximum."}},date:{hint:{min:"Entrez une date identique ou postérieure au {min}.",max:"Entrez une date identique ou antérieure au {max}.",inRange:"Entrez une date comprise entre le {min} et le {max}."},messageDetail:{rangeUnderflow:"Entrez une date identique ou postérieure au {min}.",rangeOverflow:"Entrez une date identique ou antérieure au {max}."},messageSummary:{rangeUnderflow:"La date est antérieure à la date minimum.",rangeOverflow:"La date est postérieure à la date maximum."}},time:{hint:{min:"Entrez une heure identique ou postérieure à {min}.",max:"Entrez une heure identique ou antérieure à {max}.",inRange:"Entrez une heure comprise entre {min} et {max}."},messageDetail:{rangeUnderflow:"Entrez une heure identique ou postérieure à {min}.",rangeOverflow:"Entrez une heure identique ou antérieure à {max}."},messageSummary:{rangeUnderflow:"L'heure est antérieure à l'heure minimum.",rangeOverflow:"L'heure est postérieure à l'heure maximum."}}},restriction:{date:{messageSummary:"La date {value} est celle d'une entrée désactivée.",messageDetail:"La date que vous avez sélectionnée n'est pas disponible. Essayez une autre date."}},regExp:{summary:"Le format est incorrect.",detail:"Entrez des valeurs autorisées comme décrit dans cette expression rationnelle : '{pattern}'."},required:{summary:"Une valeur est requise.",detail:"Entrez une valeur."}},"oj-ojEditableValue":{loading:"Chargement",requiredText:"Obligatoire"},"oj-ojInputDate":{done:"Terminé",cancel:"Annuler",prevText:"Précédente",nextText:"Suivant",currentText:"Aujourd'hui",weekHeader:"Sem",tooltipCalendar:"Sélectionner une date.",tooltipCalendarTime:"Sélectionner la date et l'heure.",tooltipCalendarDisabled:"Sélection de date désactivée.",tooltipCalendarTimeDisabled:"Sélection de date/heure désactivée.",picker:"Sélecteur",weekText:"Semaine",datePicker:"Sélectionneur de date",inputHelp:"Appuyez sur la touche Bas ou Haut pour accéder au calendrier.",inputHelpBoth:"Appuyez sur la touche Bas ou Haut pour accéder au calendrier, et sur Maj + Bas ou Maj + Haut pour accéder au menu déroulant des heures.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Annuler",okText:"OK",currentTimeText:"Maintenant",hourWheelLabel:"Heure",minuteWheelLabel:"Minute",ampmWheelLabel:"AMPM",tooltipTime:"Sélectionner l'heure.",tooltipTimeDisabled:"Sélectionneur d'heure désactivé.",inputHelp:"Appuyez sur la touche Bas ou Haut pour accéder au menu déroulant des heures.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Longueur maximale {len} dépassée.",accessibleMaxLengthRemaining:"{chars} caractères restants."},"oj-ojInputPassword":{regexp:{messageDetail:"La valeur doit correspondre au modèle : '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Affichage de la page {pageIndex} de {pageCount}",labelAccArrowNextPage:"Sélectionnez Suivant pour afficher la page suivante",labelAccArrowPreviousPage:"Sélectionnez Précédent pour afficher la page suivante",tipArrowNextPage:"Suivant",tipArrowPreviousPage:"Précédente"},"oj-ojDataGrid":{accessibleSortAscending:"{id} triés dans l'ordre croissant",accessibleSortDescending:"{id} triés dans l'ordre décroissant",accessibleActionableMode:"Activer le mode d'intervention.",accessibleNavigationMode:"Entrée dans le mode de navigation, Appuyez sur F2 pour activer le mode de modification ou d'intervention.",accessibleEditableMode:"Entrée dans le mode de modification. Appuyez sur Échap pour naviguer en dehors de la grille de données.",accessibleSummaryExact:"Cette grille de données comporte {rownum} rangées et {colnum} colonnes.",accessibleSummaryEstimate:"Cette grille de données comporte un nombre inconnu de rangées et de colonnes.",accessibleSummaryExpanded:"{num} rangées sont actuellement développées.",accessibleRowExpanded:"Rangée développée",accessibleRowCollapsed:"Rangée réduite",accessibleRowSelected:"Rangée {row} sélectionnée",accessibleColumnSelected:"Colonne {column} sélectionnée",accessibleStateSelected:"sélectionné",accessibleMultiCellSelected:"{num} cellules sélectionnées",accessibleColumnSpanContext:"{extent} en largeur",accessibleRowSpanContext:"{extent} en hauteur",accessibleRowContext:"Rangée {index}",accessibleColumnContext:"Colonne {index}",accessibleRowHeaderContext:"En-tête de rangée {index}",accessibleColumnHeaderContext:"En-tête de colonne {index}",accessibleRowEndHeaderContext:"En-tête de fin de rangée {index}",accessibleColumnEndHeaderContext:"En-tête de fin de colonne {index}",accessibleRowHeaderLabelContext:"Étiquette d'en-tête de rangée {level}",accessibleColumnHeaderLabelContext:"Étiquette d'en-tête de colonne {level}",accessibleRowEndHeaderLabelContext:"Étiquette d'en-tête de fin de rangée {level}",accessibleColumnEndHeaderLabelContext:"Étiquette d'en-tête de fin de colonne {level}",accessibleLevelContext:"Niveau {level}",accessibleRangeSelectModeOn:"Mode d'ajout de l'intervalle de cellules sélectionné activé.",accessibleRangeSelectModeOff:"Mode d'ajout de l'intervalle de cellules sélectionné désactivé.",accessibleFirstRow:"Vous avez atteint la première rangée.",accessibleLastRow:"Vous avez atteint la dernière rangée.",accessibleFirstColumn:"Vous avez atteint la première colonne.",accessibleLastColumn:"Vous avez atteint la dernière colonne.",accessibleSelectionAffordanceTop:"Indicateur de sélection supérieur.",accessibleSelectionAffordanceBottom:"Indicateur de sélection inférieur.",msgFetchingData:"Extraction des données...",msgNoData:"Aucun élément à afficher.",labelResize:"Redimensionner",labelResizeWidth:"Redimensionner la largeur",labelResizeHeight:"Redimensionner la hauteur",labelSortRow:"Trier la rangée",labelSortRowAsc:"Trier la rangée par ordre croissant",labelSortRowDsc:"Trier la rangée par ordre décroissant",labelSortCol:"Trier la colonne",labelSortColAsc:"Trier la colonne par ordre croissant",labelSortColDsc:"Trier la colonne par ordre décroissant",labelCut:"Couper",labelPaste:"Coller",labelEnableNonContiguous:"Activer les sélections non contiguës",labelDisableNonContiguous:"Désactiver les sélections non contiguës",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Annuler"},"oj-ojRowExpander":{accessibleLevelDescription:"Niveau {level}",accessibleRowDescription:"Niveau {level}, rangée {num} de {total}",accessibleRowExpanded:"Rangée développée",accessibleRowCollapsed:"Rangée réduite",accessibleStateExpanded:"développé",accessibleStateCollapsed:"réduit"},"oj-ojListView":{msgFetchingData:"Extraction des données...",msgNoData:"Aucun élément à afficher.",msgItemsAppended:"{count} éléments ajoutés à la fin.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Touchez deux fois et maintenez la pression. Attendez le signal sonore puis réorganisez en faisant glisser.",accessibleReorderBeforeItem:"Avant {item}",accessibleReorderAfterItem:"Après {item}",accessibleReorderInsideItem:"Dans {item}",accessibleNavigateSkipItems:"Ignorer {numSkip} éléments",labelCut:"Couper",labelCopy:"Copier",labelPaste:"Coller",labelPasteBefore:"Coller avant",labelPasteAfter:"Coller après"},"oj-_ojLabel":{tooltipHelp:"Aide",tooltipRequired:"Obligatoire"},"oj-ojLabel":{tooltipHelp:"Aide",tooltipRequired:"Obligatoire"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Décrément",tooltipIncrement:"Incrément"},"oj-ojTable":{accessibleColumnContext:"Colonne {index}",accessibleColumnHeaderContext:"En-tête de colonne {index}",accessibleRowContext:"Rangée {index}",accessibleSortAscending:"{id} triés dans l'ordre croissant",accessibleSortDescending:"{id} triés dans l'ordre décroissant",accessibleStateSelected:"sélectionné",labelAccSelectionAffordanceTop:"Indicateur de sélection supérieur",labelAccSelectionAffordanceBottom:"Indicateur de sélection inférieur",labelEnableNonContiguousSelection:"Activer les sélections non contiguës",labelDisableNonContiguousSelection:"Désactiver les sélections non contiguës",labelResize:"Redimensionner",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Annuler",labelResizePopupSpinner:"Redimensionner la colonne",labelSelectRow:"Sélectionner une rangée ",labelEditRow:"Modifier une rangée",labelSelectAndEditRow:"Sélectionner et modifier une rangée ",labelSelectColumn:"Sélectionner une colonne",labelSort:"Trier",labelSortAsc:"Trier par ordre croissant",labelSortDsc:"Trier par ordre décroissant",msgFetchingData:"Extraction des données...",msgNoData:"Aucune donnée à afficher.",msgInitializing:"Initialisation...",msgColumnResizeWidthValidation:"La valeur de largeur doit être un nombre entier.",msgScrollPolicyMaxCountSummary:"Nombre maximum de rangées dépassé pour le défilement de la table.",msgScrollPolicyMaxCountDetail:"Veuillez recharger un jeu de données plus petit.",msgStatusSortAscending:"{0} triés dans l'ordre croissant.",msgStatusSortDescending:"{0} triés dans l'ordre décroissant."},"oj-ojTabs":{labelCut:"Couper",labelPasteBefore:"Coller avant",labelPasteAfter:"Coller après",labelRemove:"Supprimer",labelReorder:"Reclasser",removeCueText:"Supprimable"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Champ de recherche",noMatchesFound:"Aucune correspondance n'a été trouvée",oneMatchesFound:"Une correspondance a été trouvée",moreMatchesFound:"{num} correspondances trouvées",filterFurther:"D'autres résultats sont disponible. Indiquez d'options options de filtrage."},"oj-ojSwitch":{SwitchON:"Activer",SwitchOFF:"Désactiver"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Aucune correspondance n'a été trouvée",oneMatchesFound:"Une correspondance a été trouvée",moreMatchesFound:"{num} correspondances trouvées",filterFurther:"D'autres résultats sont disponible. Indiquez d'options options de filtrage."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Aucune correspondance n'a été trouvée",oneMatchFound:"Une correspondance a été trouvée",multipleMatchesFound:"{num} correspondances trouvées",nOrMoreMatchesFound:"{num} correspondances ou plus trouvées",cancel:"Annuler",labelAccOpenDropdown:"développer",labelAccClearValue:"effacer la valeur",noResultsLine1:"Aucun résultat trouvé",noResultsLine2:"Aucun élément correspondant à votre recherche n'a été trouvé."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Aucune correspondance n'a été trouvée",oneMatchesFound:"Une correspondance a été trouvée",moreMatchesFound:"{num} correspondances trouvées"},"oj-ojTree":{stateLoading:"Chargement...",labelNewNode:"Nouveau noeud",labelMultiSelection:"Sélection multiple",labelEdit:"Modifier",labelCreate:"Créer",labelCut:"Couper",labelCopy:"Copier",labelPaste:"Coller",labelPasteAfter:"Coller après",labelPasteBefore:"Coller avant",labelRemove:"Supprimer",labelRename:"Renommer",labelNoData:"Aucune donnée"},"oj-ojPagingControl":{labelAccPaging:"Pagination",labelAccPageNumber:"Contenu de la page {pageNum} chargé",labelAccNavFirstPage:"Première page",labelAccNavLastPage:"Dernière page",labelAccNavNextPage:"Page suivante",labelAccNavPreviousPage:"Page précédente",labelAccNavPage:"Page",labelLoadMore:"Afficher plus...",labelLoadMoreMaxRows:"Limite maximum de {maxRows} rangées atteinte",labelNavInputPage:"Page",labelNavInputPageMax:"de {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} de {pageMax} éléments",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} sur au moins {pageMax} éléments",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} sur environ {pageMax} éléments",msgItemRangeNoTotal:"{pageFrom}-{pageTo} éléments",fullMsgItem:"{pageTo} de {pageMax} éléments",fullMsgItemAtLeast:"{pageTo} sur au moins {pageMax} éléments",fullMsgItemApprox:"{pageTo} sur environ {pageMax} éléments",msgItemNoTotal:"{pageTo} éléments",msgItemRangeCurrent:"{pageFrom} à {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"de",msgItemRangeOfAtLeast:"sur au moins",msgItemRangeOfApprox:"sur environ",msgItemRangeItems:"éléments",tipNavInputPage:"Aller à la page",tipNavPageLink:"Aller à la page {pageNum}",tipNavNextPage:"Suivante",tipNavPreviousPage:"Précédente",tipNavFirstPage:"Première",tipNavLastPage:"Dernière",pageInvalid:{summary:"La valeur de page entrée n'est pas valide.",detail:"Entrez une valeur supérieure à 0."},maxPageLinksInvalid:{summary:"La valeur maxPageLinks n'est pas valide.",detail:"Entrez une valeur supérieure à 4."}},"oj-ojMasonryLayout":{labelCut:"Couper",labelPasteBefore:"Coller avant",labelPasteAfter:"Coller après"},"oj-panel":{labelAccButtonExpand:"Développer",labelAccButtonCollapse:"Réduire",labelAccButtonRemove:"Supprimer",labelAccFlipForward:"Pivoter vers l'avant",labelAccFlipBack:"Pivoter vers l'arrière",tipDragToReorder:"Déplacer pour réordonner",labelAccDragToReorder:"Déplacer pour réordonner, menu contextuel disponible"},"oj-ojChart":{labelDefaultGroupName:"Groupe {0}",labelSeries:"Série",labelGroup:"Groupe",labelDate:"Date",labelValue:"Valeur",labelTargetValue:"Cible",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Pourcentage",labelLow:"Bas",labelHigh:"Élevé",labelOpen:"Ouvrir",labelClose:"Fermer",labelVolume:"Volume",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Max.",labelOther:"Autre",tooltipPan:"Panoramique",tooltipSelect:"Sélection par rectangle de sélection",tooltipZoom:"Zoom par rectangle de sélection",componentName:"Graphique"},"oj-dvtBaseGauge":{componentName:"Jauge"},"oj-ojDiagram":{promotedLink:"{0} lien",promotedLinks:"{0} liens",promotedLinkAriaDesc:"Indirect",componentName:"Diagramme"},"oj-ojGantt":{componentName:"Diagramme de Gantt",accessibleDurationDays:"{0} jours",accessibleDurationHours:"{0} heures",accessibleTaskInfo:"Heure de début : {0}, heure de fin : {1}, durée : {2}",accessibleMilestoneInfo:"Heure : {0}",accessibleRowInfo:"Rangée {0}",accessibleTaskTypeMilestone:"Jalon",accessibleTaskTypeSummary:"Sommaire",accessiblePredecessorInfo:"{0} précédentes",accessibleSuccessorInfo:"{0} suivantes",accessibleDependencyInfo:"Type de dépendance {0}, connecte {1} à {2}",startStartDependencyAriaDesc:"du début au début",startFinishDependencyAriaDesc:"du début à la fin",finishStartDependencyAriaDesc:"de la fin au début",finishFinishDependencyAriaDesc:"de la fin à la fin",tooltipZoomIn:"Zoom avant",tooltipZoomOut:"Zoom arrière",labelLevel:"Niveau",labelRow:"Rangée",labelStart:"Début",labelEnd:"Fin",labelDate:"Date",labelBaselineStart:"Début de la référence",labelBaselineEnd:"Fin de la référence",labelBaselineDate:"Date de la référence",labelLabel:"Étiquette",labelProgress:"Progression",labelMoveBy:"Déplacer de",labelResizeBy:"Redimensionner de",taskMoveInitiated:"Déplacement de tâche lancé",taskResizeEndInitiated:"Fin de redimensionnement de tâche lancé",taskResizeStartInitiated:"Début de redimensionnement de tâche lancé",taskMoveSelectionInfo:"{0} autres sélectionnées",taskResizeSelectionInfo:"{0} autres sélectionnées",taskMoveInitiatedInstruction:"Utilisez les touches fléchées pour effectuer le déplacement",taskResizeInitiatedInstruction:"Utilisez les touches fléchées pour effectuer le redimensionnement",taskMoveFinalized:"Déplacement de tâche terminé",taskResizeFinalized:"Redimensionnement de tâche terminé",taskMoveCancelled:"Déplacement de tâche annulé",taskResizeCancelled:"Redimensionnement de tâche annulé",taskResizeStartHandle:"Indicateur de début de redimensionnement de tâche",taskResizeEndHandle:"Indicateur de fin de redimensionnement de tâche"},"oj-ojLegend":{componentName:"Légende",tooltipExpand:"Développer",tooltipCollapse:"Réduire"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Autre",labelGroup:"Groupe",labelSize:"Taille",labelAdditionalData:"Données supplémentaires",componentName:"{0} cases"},"oj-ojPictoChart":{componentName:"Graphique/image"},"oj-ojSparkChart":{componentName:"Graphique"},"oj-ojSunburst":{labelColor:"Couleur",labelSize:"Taille",tooltipExpand:"Développer",tooltipCollapse:"Réduire",componentName:"Rayons"},"oj-ojTagCloud":{componentName:"Nuage de mots clés"},"oj-ojThematicMap":{componentName:"Carte thématique",areasRegion:"Zones",linksRegion:"Liens",markersRegion:"Marqueurs"},"oj-ojTimeAxis":{componentName:"Axe temporel"},"oj-ojTimeline":{componentName:"Graphique temporel",accessibleItemDesc:"La description est {0}.",accessibleItemEnd:"L'heure de fin est {0}.",accessibleItemStart:"L'heure de début est {0}.",accessibleItemTitle:"Le titre est {0}.",labelSeries:"Série",tooltipZoomIn:"Zoom avant",tooltipZoomOut:"Zoom arrière",labelStart:"Début",labelEnd:"Fin",labelDate:"Date",labelTitle:"Titre",labelDescription:"Description"},"oj-ojTreemap":{labelColor:"Couleur",labelSize:"Taille",tooltipIsolate:"Isoler",tooltipRestore:"Restaurer",componentName:"Arbre"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"G",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Données non valides",labelNoData:"Aucune donnée à afficher",labelClearSelection:"Effacer la sélection",labelDataVisualization:"Visualisation de données",stateSelected:"Sélectionné",stateUnselected:"Non sélectionné",stateMaximized:"Agrandi",stateMinimized:"Réduit",stateExpanded:"Développé",stateCollapsed:"Réduit",stateIsolated:"Isolé",stateHidden:"Masqué",stateVisible:"Visible",stateDrillable:"Forage possible",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} de {1}"},"oj-ojNavigationList":{defaultRootLabel:"Liste de navigation",hierMenuBtnLabel:"Bouton de menu hiérarchique",selectedLabel:"sélectionné",previousIcon:"Précédente",msgFetchingData:"Extraction des données...",msgNoData:"Aucun élément à afficher.",overflowItemLabel:"Plus",accessibleReorderTouchInstructionText:"Touchez deux fois et maintenez la pression. Attendez le signal sonore puis réorganisez en faisant glisser.",accessibleReorderBeforeItem:"Avant {item}",accessibleReorderAfterItem:"Après {item}",labelCut:"Couper",labelPasteBefore:"Coller avant",labelPasteAfter:"Coller après",labelRemove:"Supprimer",removeCueText:"Supprimable"},"oj-ojSlider":{noValue:"ojSlider n'a pas de valeur",maxMin:"La valeur Max doit être supérieure à la valeur Min.",startEnd:"la valeur d début ne doit pas être supérieure à la valeur de fin.",valueRange:"La valeur doit être comprise entre les valeurs Min. et Max.",optionNum:"L'option {option} n'est pas numérique",invalidStep:"Étape non valide; doit être > 0"},"oj-ojDialog":{labelCloseIcon:"Fermer"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Entrée dans la fenêtre contextuelle. Appuyez sur F6 pour naviguer entre la fenêtre et le contrôle associé.",ariaLiveRegionInitialFocusNone:"Fenêtre contextuelle ouverte. Appuyez sur F6 pour naviguer entre la fenêtre et le contrôle associé.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Entrée dans la fenêtre contextuelle. Vous pouvez fermer cette fenêtre en accédant au dernier lien qu'elle contient.",ariaLiveRegionInitialFocusNoneTouch:"Fenêtre contextuelle ouverte. Accédez au dernier lien pour placer le focus sur cette fenêtre.",ariaFocusSkipLink:"Touchez deux fois pour accéder à la fenêtre contextuelle ouverte.",ariaCloseSkipLink:"Touchez deux fois pour fermer la fenêtre contextuelle ouverte."},"oj-ojRefresher":{ariaRefreshLink:"Cliquez sur le lien pour actualiser le contenu",ariaRefreshingLink:"Actualisation du contenu",ariaRefreshCompleteLink:"Actualisation terminée"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Afficher les actions démarrées",ariaShowEndActionsDescription:"Afficher les actions terminées",ariaHideActionsDescription:"Masquer les actions"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Aucun en-tête de groupe correspondant",ariaOthersLabel:"numéro",ariaInBetweenText:"Entre {first} et {second}",ariaKeyboardInstructionText:"Appuyez sur Entrée pour sélectionner la valeur.",ariaTouchInstructionText:"Touchez deux fois et maintenez pour passer en mode geste, puis glissez vers le haut ou le bas pour ajuster la valeur."},"oj-ojMenu":{labelCancel:"Annuler",ariaFocusSkipLink:"Focus dans le menu. Touchez deux fois ou balayez pour désigner le premier élément de menu."},"oj-ojColorSpectrum":{labelHue:"Teinte",labelOpacity:"Opacité",labelSatLum:"Saturation/Luminance",labelThumbDesc:"Curseur à quatre voies du spectre de couleurs."},"oj-ojColorPalette":{labelNone:"Aucun"},"oj-ojColorPicker":{labelSwatches:"Échantillons",labelCustomColors:"Couleurs personnalisées",labelPrevColor:"Couleur précédente",labelDefColor:"Couleur par défaut",labelDelete:"Supprimer",labelDeleteQ:"Supprimer?",labelAdd:"Ajouter",labelAddColor:"Ajouter une couleur",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Teinte",labelSliderSaturation:"Saturation",labelSliderSat:"Sat",labelSliderLightness:"Clarté",labelSliderLum:"Luminosité",labelSliderAlpha:"Alpha",labelOpacity:"Opacité",labelSliderRed:"Rouge",labelSliderGreen:"Vert",labelSliderBlue:"Bleu"},"oj-ojFilePicker":{dropzoneText:"Déposez les fichiers ici ou cliquez pour les charger",singleFileUploadError:"Charger un fichier à la fois",singleFileTypeUploadError:"Vous ne pouvez pas charger des fichier de type {fileType}.",multipleFileTypeUploadError:"Vous ne pouvez pas charger des fichier ayant les types suivants : {fileTypes}.",dropzonePrimaryText:"Glisser-déposer",secondaryDropzoneText:"Sélectionner un fichier ou déposer un fichier ici.",secondaryDropzoneTextMultiple:"Sélectionner des fichiers ou déposer des fichiers ici.",unknownFileType:"inconnu"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"En cours"},"oj-ojMessage":{labelCloseIcon:"Fermer",categories:{error:"Erreur",warning:"Avertissement",info:"Informations",confirmation:"Confirmation"}},"oj-ojSelector":{checkboxAriaLabel:"Sélection de case à cocher {rowKey}"},"oj-ojMessages":{labelLandmark:"Messages",ariaLiveRegion:{navigationFromKeyboard:"Entrée dans la région des messages. Appuyez sur F6 pour retourner au dernier élément ciblé.",navigationToTouch:"La région des messages contient des nouveaux messages. Utilisez le sélecteur rotatif VoiceOver pour accéder à la région des messages.",navigationToKeyboard:"La région des messages contient des nouveaux messages. Appuyez sur F6 pour accéder à la région du message le plus récent.",newMessage:"Catégorie de message {category}. {summary}. {detail}."}}});