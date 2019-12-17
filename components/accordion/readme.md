# Accordion component

This custom element recreates the bootstrap accordion component functionality without the jquery dependency

## Sample markup

Here is some sample markup using bootstrap styling classes:

```
<cwds-accordion>
  <div class="card">
    <div class="card-header py-20" id="headingOne">
      <button class="btn btn-link" type="button" aria-expanded="false">
        Learners
      </button>
    </div>
    <div class="card-container collapsed" aria-labelledby="headingOne">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</cwds-accordion>
```

Minimal markup using only the classes needed for js hooks and ARIA:

```
<cwds-accordion>
  <div class="card">
    <div class="card-header" id="headingOne">
      <button type="button" aria-expanded="false">
        Learners
      </button>
    </div>
    <div class="card-container collapsed" aria-labelledby="headingOne">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</cwds-accordion>
```

This content type is often 