import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import '../styles/paiements.css';

export default function Paiements() {
  return (
    <div className="paiement">
      <div className="box">
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol md="8" className="mb-4">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <h3 className="mb-0">Données Personnelles</h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBRow className="mb-4">
                    <MDBCol className="espacePrénom">
                      <MDBInput 
                      label="Prénom" 
                      id="form1" 
                      type="text"
                      labelClass="champs" 
                      />
                    </MDBCol>

                    <MDBCol className="espace">
                      <MDBInput label="Nom"
                      id="form2" 
                      type="text"
                      labelClass="champs" 
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                  <MDBCol className="espace">
                    <MDBInput
                      label="Adresse"
                      id="form3"
                      type="text"
                      labelClass="champs"
                    />
                    </MDBCol>
                    <MDBCol className="espace">
                    <MDBInput
                      label="Email"
                      id="form4"
                      type="text"
                      labelClass="champs"
                    />
                    </MDBCol>
                    <MDBCol className="espace">
                    <MDBInput
                      label="Téléphone"
                      id="form5"
                      type="text"
                      labelClass="champs"
                    />
                    </MDBCol>

                  </MDBRow>
                  

                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="checkoutForm2"
                    label=" Enregistrer mes données"

                  />


                  <h3 className="mb-4">Paiement</h3>

                  <div className="modesPaiement">

                    <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    label="Carte Bancaire"
                    checked
                    />

                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      label="Apple Pay"
                    />

                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      label="Paypal"
                    />
                  </div>

                  <MDBRow>
                    <MDBCol className="espace">
                      <MDBInput
                        label="Nom du titulaire"
                        id="form6"
                        type="text"
                        labelClass="champs"
                      />
                    </MDBCol>
                    <MDBCol className="espace">
                      <MDBInput
                        label="Numéro de carte"
                        id="form7"
                        type="text"
                        labelClass="champs"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>   <MDBCol className="espace">
                      <MDBInput
                        label="Expiration"
                        id="form8"
                        type="text"
                        labelClass="champs"
                      />
                    </MDBCol>
                    <MDBCol className="espaceS">
                      <MDBInput
                        label="CVV"
                        id="form8"
                        type="text"
                        labelClass="champs"
                      />
                    </MDBCol>
                  </MDBRow>

                  <button className="bouton-paiement">
                    Procéder à l'achat
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="4" className="mb-4">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <h3 className="mb-0">Détail de la commande</h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Produit :
                      <span> 6,50€</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Livraison : 
                      <span> Gratuite</span>
                    </MDBListGroupItem>
                    <hr className="my-2"></hr>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <div>
                        <strong>Total</strong>
                        <strong>
                          <p className="mb-0">(TVA inclue)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>6,50€</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
    </div>
  );
}