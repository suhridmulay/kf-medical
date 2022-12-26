const es = {
  app: {
    title: 'Aplicación',
  },
  auth: {
    userNotFound:
      'Lo sentimos, no reconocemos tus credenciales',
    wrongPassword:
      'Lo sentimos, no reconocemos tus credenciales',
    weakPassword: 'Esta contraseña es muy débil.',
    emailAlreadyInUse: 'Correo electrónico ya está en uso',
    invalidEmail:
      'Por favor proporcione un correo electrónico válido',
    passwordReset: {
      invalidToken:
        'El enlace de restablecimiento de contraseña no es válido o ha expirado',
      error: 'Correo electrónico no reconocido',
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'El enlace de verificación de correo electrónico no es válido o ha expirado.',
      error: 'Correo electrónico no reconocido',
      signedInAsWrongUser:
        'Esta confirmación por correo electrónico se envió a {0} pero ha iniciado sesión como {1}.',
    },
    passwordChange: {
      invalidPassword:
        'La contraseña anterior no es válida.',
    },
  },
  user: {
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe.',
      userNotFound: 'Usuario no encontrado.',
      destroyingHimself: 'No puedes eliminarte a ti mismo.',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador.',
      revokingPlanUser:
        'No puede revocar el permiso de administrador del administrador del plan.',
      destroyingPlanUser:
        'No puede eliminar el administrador del plan.',
    },
  },
  tenant: {
    exists:
      'Ya hay un espacio de trabajo en esta aplicación.',
    url: {
      exists:
        'Esta URL del espacio de trabajo ya está en uso.',
    },
    invitation: {
      notSameEmail:
        'Esta invitación se envió a {0} pero has iniciado sesión como {1}.',
    },
    planActive:
      'Hay un plan activo para este espacio de trabajo. Por favor, cancele el plan primero.',
    stripeNotConfigured: 'Stripe no está configurado.',
  },
  importer: {
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },
  errors: {
    notFound: {
      message: 'Extraviado',
    },
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
  },
  email: {
    error:
      'El proveedor de correo electrónico no está configurado.',
  },
  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
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
          medicineName: 'Medicine Name debe ser único',
        }
      }
    },
    diagnosticEnum: {
      errors: {
        unique: {
          diagnosticName: 'DiagnosticName debe ser único',
        }
      }
    },
    doctor: {
      errors: {
        unique: {
          name: 'Name debe ser único',
        }
      }
    },
    patientDocument: {
      errors: {
        unique: {

        }
      }
    },
    siteInventory: {
      errors: {
        unique: {

        }
      }
    },
    symptomsEnum: {
      errors: {
        unique: {
          symptomName: 'SymptomName debe ser único',
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
          diseaseName: 'Disease Name debe ser único',
        }
      }
    },
    medicineCategoryEnum: {
      errors: {
        unique: {
          categoryName: 'Category Name debe ser único',
        }
      }
    },
    vendor: {
      errors: {
        unique: {
          vendorName: 'Vendor Name debe ser único',
          phone: 'Phone debe ser único',
          email: 'Email debe ser único',
        }
      }
    },
    purchaseOrder: {
      errors: {
        unique: {
          purchaseOrderLookup: 'PurchaseOrderLookup debe ser único',
        }
      }
    },
    purchaseOrderEntry: {
      errors: {
        unique: {

        }
      }
    },
    medicineBatch: {
      errors: {
        unique: {
          medicineBatchLookup: 'Medicine Batch Lookup debe ser único',
        }
      }
    },
    purchaseInvoice: {
      errors: {
        unique: {

        }
      }
    },
    transfer: {
      errors: {
        unique: {

        }
      }
    },
    prescriptionFill: {
      errors: {
        unique: {

        }
      }
    },
    staff: {
      errors: {
        unique: {
          name: 'Name debe ser único',
          user: 'User debe ser único',
          userId: 'User debe ser único',
        }
      }
    },
    visitTickets: {
      errors: {
        unique: {

        }
      }
    },
  }
};

export default es;
