/**
 * I18n dictionary for the en.
 */

const ptBR = {
  app: {
    title: 'Aplicação',
  },

  auth: {
    userNotFound: `Desculpe, não reconhecemos suas credenciais`,
    wrongPassword: `Desculpe, não reconhecemos suas credenciais`,
    weakPassword: 'Esta senha é muito fraca',
    emailAlreadyInUse: 'O email já está sendo usado',
    invalidEmail: 'Por favor forneça um email válido',
    passwordReset: {
      invalidToken:
        'Link de redefinição de senha inválido ou expirado',
      error: `Email não encontrado`,
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'Link de verificação de email inválido ou expirado.',
      error: `Email não encontrado.`,
      signedInAsWrongUser: `Esta confirmação de email foi enviada para {0} mas você está acessando como {1}.`,
    },
    passwordChange: {
      invalidPassword: 'A senha antiga é inválida',
    },
  },

  user: {
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      destroyingHimself: `Você não pode deletar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
      revokingPlanUser: `Você não pode revogar a permissão do responsável pelo plano ativo`,
      destroyingPlanUser: `Você não pode deletar o responsável pelo plano ativo`,
    },
  },

  tenant: {
    exists: 'Já existe um inquilino para esta aplicação.',
    url: {
      exists:
        'Esta URL de área de trabalho já está em uso.',
    },
    invitation: {
      notSameEmail: `Este convite foi enviado para {0} mas você está acessando como {1}.`,
    },
    planActive: `Existe um plano ativo para esta área de trabalho. Por favor primeiro cancele o plano.`,
  },

  importer: {
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  errors: {
    notFound: {
      message: 'Não encontrado',
    },
    forbidden: {
      message: 'Não permitido',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
  },

  email: {
    error: `Email não configurado.`,
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  entities: {
    patient: {
      errors: {
        unique: {

        }
      }
    },
    healthCenter: {
      errors: {
        unique: {

        }
      }
    },
    patientVisit: {
      errors: {
        unique: {

        }
      }
    },
    medicineEnum: {
      errors: {
        unique: {
          medicineName: 'Medicine Name deve ser único',
        }
      }
    },
    diagnosticEnum: {
      errors: {
        unique: {
          diagnosticName: 'DiagnosticName deve ser único',
        }
      }
    },
    doctor: {
      errors: {
        unique: {
          name: 'Name deve ser único',
        }
      }
    },
    patientDocument: {
      errors: {
        unique: {

        }
      }
    },
    medicineSupplies: {
      errors: {
        unique: {

        }
      }
    },
    medicineInventory: {
      errors: {
        unique: {

        }
      }
    },
    symptomsEnum: {
      errors: {
        unique: {
          symptomName: 'SymptomName deve ser único',
        }
      }
    },
    medicalHistory: {
      errors: {
        unique: {

        }
      }
    },
    chronicDiseaseEnum: {
      errors: {
        unique: {
          diseaseName: 'Disease Name deve ser único',
        }
      }
    },
    medicineCategoryEnum: {
      errors: {
        unique: {
          categoryName: 'Category Name deve ser único',
        }
      }
    },
  }
};

export default ptBR;
