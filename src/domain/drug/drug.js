function Drug(
  id = "",
  type = "",
  name = "",
  comName = "",
  deaSchedule = "",
  shortTerm = "",
  longTerm = "",
  healthIssues = "",
  withAlcohol = "",
  withDrawal = "",
  fdaMedication = "",

  streetNameIds = [],
  formIds = [],
  takenIds = [],
  therapyIds = [],

  createdAt = "",
  updatedAt = ""
) {
  this.id = id;
  this.type = type;
  this.name = name;
  this.comName = comName;
  this.deaSchedule = deaSchedule;
  this.shortTerm = shortTerm;
  this.longTerm = longTerm;
  this.healthIssues = healthIssues;
  this.withAlcohol = withAlcohol;
  this.withDrawal = withDrawal;
  this.fdaMedication = fdaMedication;

  this.streetNameIds = streetNames;
  this.formIds = formIds;
  this.takenIds = takenIds;
  this.therapyIds = therapyIds;

  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
}

Drug.prototype.addStreetName = function(streetNameId) {
  this.streetNameIds.push(streetNameId);
};

Drug.prototype.removeStreetName = function(streetNameId) {
  this.streetNameIds = this.streetNameIds.filter(id => id != streetNameId);
};

Drug.prototype.addForm = function(formId) {
  this.formIds.push(formId);
};

Drug.prototype.removeForm = function(formId) {
  this.formIds = this.formIds.filter(id => id != formId);
};

Drug.prototype.addTaken = function(takenId) {
  this.takenIds.push(takenId);
};

Drug.prototype.removeTaken = function(takenId) {
  this.takenIds = this.takenIds.filter(id => id != takenId);
};

Drug.prototype.addTherapy = function(therapyId) {
  this.therapyIds.push(therapyId);
};

Drug.prototype.removeTherapy = function(therapyId) {
  this.therapyIds = this.therapyIds.filter(id => id != therapyId);
};

export { Drug };
